import Matter from "matter-js";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDevice } from "@/hooks/useDevice";

export const CanvasMatter = () => {
  const { isSp } = useDevice();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const emojiRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const emojiEls = Array(isSp ? 15 : 20).fill("🚀");

  useEffect(() => {
    if (!canvasRef.current) return;

    /**
     * Setup
     */

    const { Engine, Render, Runner, Bodies, World, Events, Mouse } = Matter;
    engineRef.current = Engine.create();
    const world = engineRef.current.world;
    const emojis: Matter.Body[] = [];
    const canvasWidth = canvasRef.current.clientWidth || window.innerWidth;
    const canvasHeight = canvasRef.current.clientHeight || window.innerHeight;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    renderRef.current = Render.create({
      canvas: canvasRef.current,
      engine: engineRef.current,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "transparent",
      },
    });
    Render.run(renderRef.current);

    runnerRef.current = Runner.create();
    Runner.run(runnerRef.current, engineRef.current);

    const boundaries = [
      // bottom, left, right
      Bodies.rectangle(canvasWidth / 2, canvasHeight + 50, canvasWidth, 100, { isStatic: true, render: { fillStyle: "red" } }),
      Bodies.rectangle(-50, canvasHeight / 2, 100, canvasHeight, { isStatic: true, render: { fillStyle: "red" } }),
      Bodies.rectangle(canvasWidth + 50, canvasHeight / 2, 100, canvasHeight, { isStatic: true, render: { fillStyle: "red" } }),
    ];
    World.add(world, boundaries);

    // topは後から追加
    setTimeout(() => {
      World.add(world, Bodies.rectangle(canvasWidth / 2, -50, canvasWidth, 100, { isStatic: true, render: { fillStyle: "red" } }));
    }, 2000);

    emojiRefs.current.forEach((emojiEL) => {
      if (!emojiEL) return;
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight - canvasHeight;
      const angle = Math.random() * Math.PI * 2;
      const width = emojiEL?.clientWidth / 2;

      const emoji = Bodies.circle(x, y, width, {
        restitution: isSp ? 0.5 : 0.8,
        angle: angle,
        render: { fillStyle: "transparent" },
      });
      emojis.push(emoji);

      gsap.set(emojiEL, { x: x - width, y: y - width, rotate: angle * (180 / Math.PI), opacity: 0.8 });
    });
    World.add(world, emojis);

    /**
     * Update
     */
    const update = () => {
      emojiRefs.current.forEach((emojiEL, index) => {
        if (!emojiEL) return;

        const emoji = emojis[index];
        gsap.to(emojiEL, {
          duration: 0.1,
          ease: "none",
          x: emoji.position.x - (emoji.circleRadius || 0),
          y: emoji.position.y - (emoji.circleRadius || 0),
          rotation: emoji.angle * (180 / Math.PI),
        });
      });
    };
    Events.on(engineRef.current, "afterUpdate", update);

    /**
     * Event
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      const bounceForce = Math.abs(scrollVelocity) * (isSp ? 0.0001 : 0.0075);
      const forceDirection = scrollVelocity > 0 ? -1 : 1;

      emojis.forEach((emoji) => {
        Matter.Body.applyForce(emoji, emoji.position, {
          x: (Math.random() - 0.5) * bounceForce,
          y: (Math.random() - 0.5) * forceDirection * bounceForce,
        });
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.off(engineRef.current, "afterUpdate", update);
      if (runnerRef.current) Runner.stop(runnerRef.current);
      if (renderRef.current) Render.stop(renderRef.current);
      if (engineRef.current) Engine.clear(engineRef.current);
      World.clear(world, false);
    };
  }, []);

  return (
    <>
      <div className="t-0 l-0 fixed">
        {emojiEls.map((emojiEl, index) => (
          <span ref={(el) => (emojiRefs.current[index] = el)} key={index} style={{}} className="absolute flex items-center text-6xl leading-none opacity-0 md:text-8xl">
            {emojiEl}
          </span>
        ))}
      </div>
      <canvas ref={canvasRef} className="t-0 l-0 fixed h-full w-full"></canvas>
    </>
  );
};
