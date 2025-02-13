"use client";
import React from "react";
import clsx from "clsx";
import Footer from "../Footer";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded: any = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:pt-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
        {className !== "about" && <Footer />}
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
