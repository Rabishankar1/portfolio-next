"use client"

import Bounded from "../common/Bounded";
import Heading from "../common/Heading";
import { PROJECTS } from "../common/constants";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        My Projects
      </Heading>
      <div className="prose prose-xl prose-invert mb-10 text-xl">
        Personal projects made with implementation of some
        of the concepts I have learnt over the years. <br />
        Please feel free to go through them
      </div>
      <ProjectList viewMoreText="Live Site" />
    </Bounded>
  );
};

export default Projects;
