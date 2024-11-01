import { LazyMotion, domAnimation, useInView } from "framer-motion";
import HeadingDivider from "@/components/HeadingDivider";
import { useRef } from "react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="section">
        <HeadingDivider title="About me" />
        <div className="flex max-w-5xl flex-col gap-3 pt-10">
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
              Oh hello there, my name is Loi Phan, a recent graduate with a
              passion for both full-stack web development and data engineering.
              I enjoy bringing together the best of both worlds—building
              seamless, user-friendly web applications while handling the
              complexities of data processing and management. My technical
              skills range from Next.js and Node.js for developing robust web
              solutions to using Apache Spark, Kafka, and AWS for designing
              scalable data pipelines.
            </p>
            <p className="pt-4">
              What excites me most is working on end-to-end projects that
              integrate full-stack development with data engineering, allowing
              me to create solutions that not only deliver great user
              experiences but also manage and process data efficiently. I&apos;m
              constantly learning and eager to explore new opportunities to
              combine these two fields in innovative ways.
            </p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default EducationSection;
