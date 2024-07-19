// "use client";
import clsx from "clsx";
import React from "react";
import Link from "next/link";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Bounded from "./common/Bounded";
import {
  FIRST_NAME,
  GITHUB_LINK,
  LAST_NAME,
  LINKEDIN_LINK,
  TWITTER_LINK,
  sections,
} from "./common/constants";
import { handleRedirectToSection } from "@/public/lib/utils";

export default function Footer() {
  const fullName = `${FIRST_NAME} ${LAST_NAME}`;
  return (
    <footer className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <span
            onClick={() => handleRedirectToSection("home")}
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400 cursor-pointer"
          >
            {fullName}
          </span>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {fullName}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {sections.map((name, index) => (
              <React.Fragment key={index}>
                <li>
                  <span
                    onClick={() => handleRedirectToSection(name)}
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400 capitalize cursor-pointer"
                    )}
                  >
                    {name}
                  </span>
                </li>
                {index < sections.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <Link
            href={GITHUB_LINK}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={fullName + " on GitHub"}
          >
            <FaGithub />
          </Link>
          <Link
            href={TWITTER_LINK}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={fullName + " on Twitter"}
          >
            <FaTwitter />
          </Link>

          <Link
            href={LINKEDIN_LINK}
            target="_blank"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            aria-label={fullName + " on LinkedIn"}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}
