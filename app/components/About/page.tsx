"use client";
import TechList from "../TechList/page";
import Bounded from "../common/Bounded";
import Button from "../common/Button";
import Heading from "../common/Heading";
import { ABOUT_ME } from "../common/constants";
import Avatar from "./Avatar";

const About = () => {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/13t-49j_y54xDpl3O2qJW1qb9RWfCfMKS/view",
      "_blank"
    );
  };
  return (
    <Bounded className="about">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          About Me
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1 text-xl about-me-text">
          {ABOUT_ME}
        </div>
        <Button onClick={handleOpenResume} label="Resume" />

        <Avatar
          image={"/images/profile_picture.jpg"}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
      {/* <TechList /> */}
    </Bounded>
  );
};

export default About;
