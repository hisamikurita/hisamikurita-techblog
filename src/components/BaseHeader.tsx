import Link from "next/link";
import { URL_HOME, URL_ABOUT } from "@/libs/constants";

export const BaseHeader = () => {
  return (
    <header className="fixed flex h-[60px] w-full items-center bg-white">
      <div className="custom-main-container">
        <div className="flex justify-between">
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
