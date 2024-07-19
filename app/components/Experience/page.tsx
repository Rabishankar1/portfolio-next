"use client";
import React from "react";
import { EXPERIENCE_LIST } from "../common/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Image from "next/image";
import moment from "moment";
import { IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Bounded from "../common/Bounded";
import Heading from "../common/Heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

const StyledTimeLineDot = styled(TimelineDot)`
  &.MuiTimelineDot-outlined {
    border: none;
  }
`;

const Experience = () => {
  return (
    <Bounded className="mb-14">
      <Heading as="h1" size="xl" className="col-start-1">
        My Experience
      </Heading>
      <VerticalTimeline>
        {EXPERIENCE_LIST.map((experience, index) => {
          const {
            start_date,
            end_date,
            description,
            designation,
            company_name,
            location,
            logo,
          } = experience;
          const { ref, inView }: any = useInView({
            triggerOnce: true,
          });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                visible={inView}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(71 85 105)",
                  //   color: "#475569",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(71 85 105)",
                }}
                date={moment(start_date).format("d MMMM YYYY")}
                iconStyle={{ background: "white", color: "#fff" }}
                icon={
                  <IconButton>
                    <Image
                      width={60}
                      height={60}
                      src={logo!}
                      className="h-full w-full object-cover rounded-lg"
                      alt=""
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
        })}
      </VerticalTimeline>
    </Bounded>
  );
};

export default Experience;
