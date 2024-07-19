"use client";
import React from "react";
import { EXPERIENCE_LIST } from "../common/constants";
import Image from "next/image";
import moment from "moment";
import { IconButton } from "@mui/material";
import Bounded from "../common/Bounded";
import Heading from "../common/Heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";



const ExperienceTimelineElement = ({ experience }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const {
    start_date,
    end_date,
    description,
    designation,
    company_name,
    location,
    logo,
  } = experience;

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(71 85 105)",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgb(71 85 105)",
        }}
        date={moment(start_date).format("D MMMM YYYY")}
        iconStyle={{ background: "white", color: "#fff" }}
        icon={
          <IconButton>
            <Image
              width={60}
              height={60}
              src={logo!}
              className="h-full w-full object-cover rounded-lg"
              alt={`${company_name} logo`}
            />
          </IconButton>
        }
      >
        <h1 className="vertical-timeline-element-title bg-slate-900 text-slate-300 rounded-md p-2 flex justify-between">
          <div>
            <div className="font-bold text-3xl">{designation}</div>
            <div className="text-xl">{company_name}</div>
          </div>
          <div className="text-slate-900 bg-slate-300 w-fit p-1 flex items-center my-4 rounded text-lg">
            {location}
          </div>
        </h1>
        <p className="whitespace-pre-line text-xl">{description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

const Experience = () => {
  return (
    <Bounded className="mb-14">
      <Heading as="h1" size="xl" className="col-start-1">
        My Experience
      </Heading>
      <VerticalTimeline>
        {EXPERIENCE_LIST.map((experience, index) => (
          <ExperienceTimelineElement
            key={index}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </Bounded>
  );
};

export default Experience;
