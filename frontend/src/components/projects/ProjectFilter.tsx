"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Filter } from "../filter/Filter";
import Loader from "../Loader";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
import { TECH_CATEGORIES } from "@/constants";
import { client } from "@/sanity/client";
import { Project } from "@/types";
import ProjectItem from "./ProjectItem";

const ProjectFilter = () => {
  const [categories, setCategories] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const sanityQuery = `*[_type == "projects"${categories === undefined ? "" : ` && "${categories}" in category[]->title`}]{
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
                "categories": *[_type == "category" && _id in ^.category[]->_id].title,
                "techStack": *[_type == "techStack" && _id in ^.techStack[]->_id].title
            }`;

      await client.fetch(sanityQuery, {}).then((data) => {
        setData(data);
        setLoading(false);
      });
    }

    fetchProjects();
  }, [categories]);

  return (
    <>
      <Filter
        filters={TECH_CATEGORIES}
        onClick={(categoryName) => setCategories(categoryName)}
      />

      <Suspense
        fallback={
          <div className="flex-center">
            <Loader />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={Error}>
          {loading === true && data.length === 0 ? (
            // Loading state
            <div className="flex-center">
              <Loader />
            </div>
          ) : data.length === 0 ? (
            // Empty state
            <div className="flex-center">
              <h3 className="text-2xl">
                No projects found in {categories} category
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {data
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
          )}
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default ProjectFilter;
