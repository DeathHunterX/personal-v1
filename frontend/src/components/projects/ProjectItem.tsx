// export function ProjectItem({ project, index }) {
// 	const { description, images, liveUrl, repoUrl, stack, title } = project;
// 	const cardRef = useRef(null);
// 	const isInView = useInView(cardRef, { once: true });

// 	const galleryImages = images.map((img) => ({
// 		original: img,
// 		loading: "lazy"
// 	}));

import React, { Suspense, useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Project } from "@/types";
import Loader from "../Loader";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

const ProjectItem = ({
  _id,
  title,
  description,
  repoUrl,
  liveUrl,
  poster,
  images,
  category,
  techStack,
  createdAt,
  index,
}: Project) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const galleryImages = images
    ? images?.map((img) => ({
        original: img?.url,
        thumbnail: img?.url,
      }))
    : poster
      ? [{ original: poster?.url, thumbnail: poster?.url }]
      : [{ original: "", thumbnail: "" }];

  return (
    <article
      ref={cardRef}
      className="bg-card flex flex-col rounded-lg"
      style={{
        transform: isInView
          ? "none"
          : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`,
      }}
    >
      <figure>
        <div className="aspect-[12/9.2] size-full">
          <Suspense fallback={<Loader />}>
            <ImageGallery
              items={galleryImages}
              showPlayButton={false}
              showThumbnails={false}
              showIndex
              lazyLoad={true}
              additionalClass="gallery-item"
            />
          </Suspense>
        </div>
      </figure>

      <div className="flex flex-[2] flex-col gap-10 px-5 py-6 text-center">
        <header className="flex flex-1 flex-col items-center justify-start gap-3">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="font-light leading-7">{description}</p>
        </header>

        <footer className="flex flex-col gap-10">
          {!!techStack.length && (
            <div className="flex-center flex-wrap gap-2">
              {techStack.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex-center gap-10">
            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                className="icon-link-btn"
                title="Go to Github repository"
              >
                <VscSourceControl />
                <span>Source</span>
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="icon-link-btn"
                title="Go to live address"
              >
                <FiExternalLink />
                <span>Demo</span>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ProjectItem;
