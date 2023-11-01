import Link from "next/link";
import { URL_HOME, URL_ABOUT } from "@/libs/constants";

export const BaseHeader = () => {
  return (
    <header className="fixed w-full h-[60px] flex items-center bg-white">
      <div className="custom-container">
        <div className="flex justify-between">
          <p>
            <h1>見出し</h1>
          </p>
          <p>
            <Link href={URL_HOME}>HSMKRT</Link>
          </p>
          <nav>
            <ul className="flex">
              <li className="mr-[24px]">
                <Link href={URL_HOME}>Blog</Link>
              </li>
              <li>
                <Link href={URL_ABOUT}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
