"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "@/lib/utils";

const HeadingDivider = ({ title = "" }) => {
  return (
    <header className="flex items-center">
      <LazyMotion features={domAnimation}>
        <m.h2
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className="heading-divider"
        >
          {title}
        </m.h2>
      </LazyMotion>
    </header>
  );
};

export default HeadingDivider;
