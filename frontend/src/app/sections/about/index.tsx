"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import HeadingDivider from "@/components/HeadingDivider";
import TimeLine from "@/components/TimeLine";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="section">
        <HeadingDivider title="About me" />
        <div className="flex max-w-5xl flex-col gap-3 pb-16 pt-10">
          <div
            ref={ref}
            className="text-xl font-light leading-relaxed"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <p>
              Oh hello there, my name is Loi Phan, I&lsquo;m from Vietnam and
              I&lsquo;m a self taught both Full Stack Developer with a focus on
              React, Node.JS and Data Engineer in Ho Chi Minh, Vietnam.
            </p>
            <p>
              During my university years, I developed a deep passion for web
              programming as well as data engineering, and I consistently
              engaged in learning new concepts and techniques in these fields.
            </p>
          </div>
        </div>

        <TimeLine />
      </section>
    </LazyMotion>
  );
};

export default AboutSection;
