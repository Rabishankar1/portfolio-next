"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import Home from "./components/Home/page";
import About from "./components/About/page";
import TechList from "./components/TechList/page";
import Experience from "./components/Experience/page";
import Projects from "./components/Projects/page";
import "./components/navbar.css";
import NavbarMobile from "./components/NavbarMobile";
import { SectionContext } from "./Context/SectionContext";

export default function Main() {
  const [visibleSection, setVisibleSection] = useState("");

  const sectionRefs: any = useRef({});
  const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry, "entry");
          if (entry.isIntersecting) {
            window.history.pushState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: [0.1, 0.9] }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        sectionRefs.current[section] = element;
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = sectionRefs.current[section];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

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
    <SectionContext.Provider value={{ visibleSection, setVisibleSection }}>
      <main className="">
        <Navbar />
        <div>
          <div className="section" id="home">
            <Home />
          </div>
          <div className="section" id="about">
            <About />
            <TechList />
          </div>
          <div className="section" id="experience">
            <Experience />
          </div>
          <div className="section" id="projects">
            <Projects />
          </div>
          {/* <div className="section h-screen" id="contact">
      Contact Section
    </div> */}
        </div>
      </main>
      <div className="absolute inset-0 -z-50 max-h-screen background-gradient"></div>
      <div className="absolute pointer-events-none inset-0 -z-40 h-full bg-[url(/noisetexture.jpg)] opacity-20 mix-blend-soft-light"></div>
      <NavbarMobile />
    </SectionContext.Provider>
  );
}
