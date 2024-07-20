"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FIRST_NAME, LAST_NAME, sections } from "./common/constants";
import { handleRedirectToSection } from "@/public/lib/utils";

const Navbar = () => {
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash !== visibleSection) {
        setVisibleSection(hash);
      }
    };

    window.addEventListener("scroll", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleHashChange);
    };
  }, [visibleSection]);
  return (
    <nav className="navbar flex justify-between bg-slate-50 px-4 py-2 m-4 items-center rounded-xl z-10">
      <span
        className="font-extrabold tracking-tighter text-slate-900 cursor-pointer text-3xl"
        onClick={() => handleRedirectToSection("home")}
      >
        {`${FIRST_NAME} ${LAST_NAME}`}
      </span>
      <ul className="flex full justify-between navbar relative z-50 flex-row items-center gap-1 bg-transparent py-0 md:flex">
        {sections.map((section, index) => (
          <li className="flex items-center" key={index}>
            <div
              onClick={() => handleRedirectToSection(section)}
              className={`box-border nav-button group relative block overflow-hidden rounded px-3 py-1 text-base ${
                visibleSection === section ? "font-bold" : ""
              } text-slate-900`}
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                  visibleSection === section ? "translate-y-6" : "translate-y-8"
                )}
              ></span>
              <span className="relative capitalize">{section}</span>
            </div>
            {index !== sections.length - 1 && (
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>
            )}
          </li>
        ))}
        {/* <Button
          label="Contact"
          onClick={() => handleRedirectToSection("contact")}
          className="mx-3"
        /> */}
      </ul>
    </nav>
  );
};
export default Navbar;
