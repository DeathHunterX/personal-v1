"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import HeadingDivider from "@/components/HeadingDivider";
import { ToolsAndTechs } from "@/constants/toolTech";
import { TechnologyName } from "@/types";
import { FaCircle } from "react-icons/fa";
import { PortfolioInfo } from "@/data/info";
import Image from "next/image";

const TechnologiesSection = () => {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="tech" className="section">
        <HeadingDivider title="Technologies" />
        <p
          ref={textRef}
          className="my-5 text-2xl"
          style={{
            transform: isTextInView ? "none" : "translateX(-200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          I work with the following technologies and tools:
        </p>

        {!!PortfolioInfo.toolsAndTechs.length && (
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
            {PortfolioInfo.toolsAndTechs.map((tech, index) => {
              return (
                <div
                  key={tech.category}
                  ref={stackRef}
                  className="flex flex-1 flex-col gap-4 md:flex-auto"
                  style={{
                    transform: isStackInView
                      ? "none"
                      : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                    opacity: isStackInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                      index === 0 ? 0 : 0.5 * index
                    }s`,
                  }}
                >
                  <h3 className="text-2xl font-bold">{tech.category}</h3>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-8">
                    {tech.items.map((name) => {
                      const Icon = ToolsAndTechs[name as TechnologyName];
                      return (
                        <div key={name} className="group relative flex">
                          <span role="img">
                            {typeof Icon === "string" ? (
                              <Image
                                src={Icon}
                                width={36}
                                height={36}
                                alt={name}
                              />
                            ) : Icon ? (
                              <Icon size={32} />
                            ) : (
                              <FaCircle size={32} />
                            )}
                          </span>
                          <span
                            className="absolute left-1/2 mx-auto mt-3 w-max -translate-x-1/2 translate-y-full rounded-md bg-gray-800
                            px-2 text-sm text-gray-100 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
                          >
                            {name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </LazyMotion>
  );
};

export default TechnologiesSection;
