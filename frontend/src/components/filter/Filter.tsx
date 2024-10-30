"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

interface Props {
  filters: {
    name: string;
    value: string | undefined;
  }[];
  onClick: (event: any) => any;
}

export function Filter({ filters, onClick = (f) => f }: Props) {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });
  const [activeFilter, setActiveFilter] = useState(undefined);

  const handleFilterClick = (filter: any) => {
    onClick(filter);
    setActiveFilter(filter);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={animationRef}
        className="my-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <h3 aria-label="Filter projects" className="text-xl font-bold">
          Filter by:
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          {filters.map((item: any, index: number) => {
            return (
              <button
                key={index}
                className={`icon-link-btn icon-link-btn--outline h-10 px-4 ${activeFilter === item.value ? "icon-link-btn--active" : ""}`}
                onClick={() => handleFilterClick(item.value)}
                aria-label={`Filter projects by ${item.value}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}
