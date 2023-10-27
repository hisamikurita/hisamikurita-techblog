import Link from "next/link";

export const BaseHeader = () => {
  return (
    <header className="fixed w-full h-[60px] flex items-center bg-white">
      <div className="custom-container">
        <div className="flex justify-between">
          <p>
            <Link href="/">HSMKRT</Link>
          </p>
          <nav>
            <ul className="flex">
              <li className="mr-[24px]">
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
