"use client";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
} from "react";

import { gsap } from "gsap";
import Bounded from "../common/Bounded";
import Shapes from "./Shapes";
import {FIRST_NAME, LAST_NAME, TAG} from "../common/constants"

const Home = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );
      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name
      .split("")
      .map(
        (
          letter:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined,
          index: Key | null | undefined
        ) => (
          <span
            key={index}
            className={`name-animation name-animation-${key} inline-block opacity-0`}
          >
            {letter}
          </span>
        )
      );
  };

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(2.5rem,17.5vmin,20rem)] font-extrabold leading-none tracking-tighter"
          >
            <span className="block text-slate-300 whitespace-nowrap">
              {renderLetters(FIRST_NAME, "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500 whitespace-nowrap">
              {renderLetters(LAST_NAME, "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {TAG}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Home;
