"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });
  const year = new Date().getFullYear();

  return (
    <LazyMotion features={domAnimation}>
      <footer
        ref={footerRef}
        className="container-md relative mt-5 py-10 before:absolute before:left-4 before:top-0 before:h-px before:w-[calc(100%-16px)] before:bg-gray-100"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}
      >
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
          <p className="font-light">
            Copyright &copy; {year} Loi Phan. All rights reserved. No Cookies.
          </p>
          <SocialMedia type="navigation" />
        </div>
      </footer>
    </LazyMotion>
  );
};

export default Footer;
