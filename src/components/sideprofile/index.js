import React from "react";
import { Link } from "react-router-dom";
import OnlineStatus from "../ProfileItem/OnlineStatus";
import ProfileItem from "../ProfileItem/ProfileItem";
import EditSvg from "../../SVGs/EditSvg";
import { Avatar } from "../profileContainer/style";
import {
  Categories,
  Completeness,
  Connects,
  Cont,
  Info,
  Percentage,
  Scale,
  Side,
  Status,
  Wrap,
} from "./style";
import { useSelector } from "react-redux";

const SideProfile = () => {
  const { theUser } = useSelector((state) => state.user);
  const { name, jobTitle } = theUser;
  return (
    <Side>
      <Avatar />
      <Info>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <h4 style={{ textDecoration: "underline" }}>{name}</h4>
        </Link>
        <p>{jobTitle}</p>
      </Info>
      <Completeness>
        <h5>Profile Completeness:</h5>
        <Cont>
          <Scale>
            <Percentage />
          </Scale>
          <p>90%</p>
        </Cont>
      </Completeness>
      <Connects>
        <p>134 Available Connects</p>
      </Connects>
      <Status>
        <Wrap>
          <ProfileItem title="Availability Badge" margin="0.5rem 0">
            <EditSvg />
          </ProfileItem>
          <OnlineStatus editable={false} />
        </Wrap>
        <Wrap>
          <ProfileItem title="Hours per week" margin="0.5rem 0">
            <EditSvg />
          </ProfileItem>
          <p>More than 30 hrs/week</p>
        </Wrap>
        <Wrap>
          <ProfileItem title="Profile Visibility" margin="0.5rem 0">
            <EditSvg />
          </ProfileItem>
          <p>Public</p>
        </Wrap>
        <Wrap>
          <ProfileItem title="Job Preference" margin="0.5rem 0">
            <EditSvg />
          </ProfileItem>
          <p>No preference set</p>
        </Wrap>
      </Status>
      <Categories>
        <Wrap>
          <ProfileItem title="My Categories" margin="0.5rem 0">
            <EditSvg />
          </ProfileItem>
          <p>Web Development</p>
          <p>E-commerce Development</p>
        </Wrap>
      </Categories>
    </Side>
  );
};

export default SideProfile;
