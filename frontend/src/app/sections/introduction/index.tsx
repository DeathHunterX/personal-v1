"use client";

import { useState, useEffect, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

// data
import { PortfolioInfo } from "@/data/info";
import { TextElement } from "@/lib/TextElement";
import Link from "next/link";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import IntroductionAnimation from "./animation";

const IntroductionSection = () => {
  const ref = useRef(null);
  const introRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  const { scrollToEl } = useScrollTo();
  const isTabletUp = useMediaQuery("min-width: 768px");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);

      if (count === PortfolioInfo.description.length) {
        setCount(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <LazyMotion features={domAnimation}>
      <section id="intro" className="section" ref={introRef}>
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr]">
          <div className="py-5 md:py-10">
            <h1
              ref={ref}
              className="text-3xl font-bold md:text-5xl xl:text-6xl"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <p>
                {PortfolioInfo.header.title.split(" ").map((word, index) => {
                  // Check if the word is in the mark array
                  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, ""); // remove punctuation for exact matching
                  if (PortfolioInfo.header.mark.includes(cleanWord)) {
                    return <mark key={index}>{word} </mark>;
                  } else {
                    return `${word} `;
                  }
                })}
              </p>
            </h1>

            <div className="relative mt-3 flex flex-col overflow-hidden">
              <p
                ref={ref}
                className="transform-none text-[17px] opacity-100 md:text-2xl"
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                I
                <span
                  className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                  style={{
                    top:
                      count === 0
                        ? "0"
                        : count === 1
                          ? "-100%"
                          : count === 2
                            ? "-200%"
                            : count === 3
                              ? "-300%"
                              : "0",
                    left: "13px",
                  }}
                >
                  {PortfolioInfo.description.map((element) => (
                    <TextElement key={element} element={element} />
                  ))}
                </span>
              </p>
            </div>
            <p
              ref={ref}
              className="mb-10 mt-3 text-xl text-gray-500"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Stick around to see some of my work.
            </p>
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <Link
                href="#projects"
                onClick={(e) => scrollToEl(e)}
                className="btn"
                aria-label="Latest projects"
              >
                See my latest projects
              </Link>
              <Link
                href={PortfolioInfo.cvLink}
                rel="noopener noreferrer"
                target="_blank"
                className="btn-transparent ms-3"
              >
                Download CV
              </Link>
            </div>
          </div>

          {isTabletUp && <IntroductionAnimation />}
        </div>
      </section>
    </LazyMotion>
  );
};

export default IntroductionSection;
