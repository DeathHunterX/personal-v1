"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { PortfolioInfo } from "@/data/info";
import { domAnimation, LazyMotion, useInView } from "framer-motion";

const TimeLine = () => {
  const carouselRef = useRef(null);

  const { theme } = useTheme();
  const isInView = useInView(carouselRef, { once: true });
  const colorMode = theme;
  const darkThemeColor = colorMode === "dark";

  const [mounted, setMounted] = useState(false);

  // Ensures the theme is loaded before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const fillColor = !mounted ? "#232323" : darkThemeColor ? "#fff" : "#232323";

  return (
    <LazyMotion features={domAnimation}>
      <ul
        ref={carouselRef}
        className="hide-scroll-bar flex cursor-pointer snap-x flex-row flex-nowrap justify-between gap-5 overflow-x-auto"
      >
        <>
          {PortfolioInfo.experiences.length !== 0 &&
            PortfolioInfo.experiences.map((item, index) => {
              return (
                <li
                  id={`carousel__item-${index}`}
                  key={index}
                  className="flex w-[calc((100%/2)-30px)] snap-start flex-col gap-3 sm:w-1/3 md:w-1/6"
                  // onClick={(e) => handleClick(e, index)}
                  style={{
                    transform: isInView
                      ? "none"
                      : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                      index === 0 ? 0.5 : 1.05 * index
                    }s`,
                  }}
                >
                  <h3
                    aria-label={"What do I do in " + item?.year}
                    className="flex items-center gap-4 text-2xl font-bold"
                  >
                    {`${item?.year}`}
                    <svg
                      width="208"
                      height="6"
                      viewBox="0 0 208 6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill={fillColor}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                        fillOpacity="0.5"
                        id="path_0"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-4.30412e-10"
                          y1="0.5"
                          x2="208"
                          y2="0.500295"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop
                            offset="0.79478"
                            stopColor="#fff"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h3>
                  <p className="tracking-wide">{item.text}</p>
                </li>
              );
            })}
        </>
      </ul>
    </LazyMotion>
  );
};

export default TimeLine;
