import React, { useState } from "react";
import { useDispatch } from "react-redux";
import JobModal from "../../Modals/JobModal";
import { saveJob } from "../../redux/JobsSlice";
import DislikeSvg from "../../SVGs/DislikeSvg";
import LikeSvg from "../../SVGs/LikeSvg";
import LocationSvg from "../../SVGs/LocationSvg";
import Verified from "../../SVGs/VerifiedSvg";
import Chip from "../Chip";
import Profileicon from "../ProfileItem/Profileicon";

import {
  Body,
  Flex1,
  Flex2,
  Icons,
  JobContainer,
  Like,
  PayAndLocation,
  PayInfo,
  Proposals,
  Skills,
  Title,
} from "./style";

const Job = ({
  theJob,
  topic,
  payInfo,
  body,
  skills,
  proposals,
  payment,
  location,
}) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <JobModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        thejob={theJob}
      />
      <JobContainer>
        <Flex1>
          <Title onClick={() => setIsOpen(true)}>{topic}</Title>
          <Icons>
            <Profileicon modal="no">
              <DislikeSvg />
            </Profileicon>
            <Like onClick={() => dispatch(saveJob(theJob))}>
              <LikeSvg />
            </Like>
          </Icons>
        </Flex1>
        <Flex2>
          <PayInfo>{payInfo}</PayInfo>
          <Body>{body}</Body>
          <Skills>
            {skills?.map((skill) => {
              return <Chip key={skill} title={skill} />;
            })}
          </Skills>
          <Proposals>
            <p>Proposals: </p>
            {proposals}
          </Proposals>
          <PayAndLocation>
            <p>
              <Verified /> {payment}
            </p>
            <p>
              <LocationSvg /> {location}
            </p>
          </PayAndLocation>
        </Flex2>
      </JobContainer>
    </>
  );
};

export default Job;
