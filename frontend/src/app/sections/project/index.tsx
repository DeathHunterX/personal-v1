"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";
import { client } from "@/sanity/client";

import HeadingDivider from "@/components/HeadingDivider";
import ProjectItem from "@/components/projects/ProjectItem";
import Loader from "@/components/Loader";
import Error from "@/app/error";

import { SITE_ROUTES } from "@/constants/index";
import { Project } from "@/types";

const options = { next: { revalidate: 60 } };

const ProjectsSection = () => {
  const btnRef = useRef(null);
  const isBtnInView = useInView(btnRef, { once: true });

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const sanityQuery = `
      *[_type == "projects"]{
        _id, 
        title, 
        description, 
        repoUrl, 
        liveUrl, 
        createdAt,
        "poster": poster.asset->{
          url, 
          metadata {dimensions, lqip},  // Retrieve image dimensions and low-quality image placeholder (LQIP)
          originalFilename  // Optionally, get the original filename
        },
        "images": images[].asset->{
          url, 
          metadata {dimensions, lqip},  // Retrieve image dimensions and low-quality image placeholder (LQIP)
          originalFilename  // Optionally, get the original filename
        },
        "techStack": *[_type == "techStack" && _id in ^.techStack[]->_id].title
      }`;
      await client.fetch(sanityQuery, {}, options).then((data) => {
        setData(data);
      });
    }

    fetchProjects();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section">
        <HeadingDivider title="Latest projects" />
        <div className="h-10 md:h-14" />

        <div className="flex flex-col items-center gap-8 md:gap-14">
          <Suspense
            fallback={
              <div className="flex-center">
                <Loader />
              </div>
            }
          >
            <ErrorBoundary FallbackComponent={Error}>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {data
                  .slice(0, 6)
                  ?.sort(
                    (a: Project, b: Project) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  ?.map((project: any, index: number) => (
                    <ProjectItem
                      key={index}
                      _id={project._id}
                      title={project.title}
                      description={project.description}
                      repoUrl={project.repoUrl}
                      liveUrl={project.liveUrl}
                      poster={project.poster}
                      images={project.images}
                      category={project.category}
                      techStack={project.techStack}
                      createdAt={project.createdAt}
                      index={index}
                    />
                  ))}
              </div>
            </ErrorBoundary>
          </Suspense>

          <Link
            href={SITE_ROUTES.projects}
            tabIndex={-1}
            aria-label="Go to projects page"
            ref={btnRef}
            className="btn"
            style={{
              transform: btnRef ? "none" : "translateX(-50px)",
              opacity: isBtnInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <button aria-label="See more projects">More projects</button>
          </Link>
        </div>
      </section>
    </LazyMotion>
  );
};

export default ProjectsSection;
