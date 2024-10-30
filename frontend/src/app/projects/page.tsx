import { Metadata } from "next";

import HeadingDivider from "@/components/HeadingDivider";
import ProjectFilter from "@/components/projects/ProjectFilter";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <div className="container-md">
      <section id="projects" className="section">
        <HeadingDivider title="Relevant projects" />

        <ProjectFilter />
      </section>
    </div>
  );
};

export default ProjectsPage;
