import { handleRedirectToSection } from "@/public/lib/utils";
import React, { useContext, useState } from "react";
import { sections } from "./common/constants";
import clsx from "clsx";
import { SectionContext } from "../page";
import Person2Icon from "@mui/icons-material/Person2";

const NavbarMobile = () => {
  const { visibleSection, setVisibleSection } = useContext(SectionContext);

  return (
    <div className="navbar-mobile rounded-t-xl">
      <ul className="flex full justify-between relative z-50 flex-row items-center gap-1 bg-transparent py-0 md:flex h-16">
        {sections.map((section, index) => (
          <li className="flex items-center flex-grow" key={index}>
            <div
              onClick={() => handleRedirectToSection(section)}
              className={`box-border m-auto group relative block overflow-hidden rounded px-3 py-1 text-base ${
                visibleSection === section ? "font-bold" : ""
              } text-slate-900`}
            >
              {/* <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                  visibleSection === section ? "translate-y-2" : "translate-y-4"
                )}
              ></span> */}
              <div className="flex flex-col items-center">
                <Person2Icon
                  color={visibleSection === section ? "none" : "action"}
                />
                <span
                  className="relative capitalize"
                  style={{
                    fontSize: 12,
                    color: visibleSection === section ? "black" : "gray",
                  }}
                >
                  {section}
                </span>
              </div>
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
    </div>
  );
};

export default NavbarMobile;
