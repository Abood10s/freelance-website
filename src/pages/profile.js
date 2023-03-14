import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/UserSlice";

import {
  Actions,
  AllWork,
  Avatar,
  Column1,
  Column2,
  Container,
  Description,
  EditAvatar,
  Flex1,
  HeadSection,
  JobDescription,
  MainSection,
  Online,
  P,
  Section,
} from "../components/profileContainer/style";
import { Spinner } from "../global/style";
import OnlineStatus from "../components/ProfileItem/OnlineStatus";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import EditSvg from "../SVGs/EditSvg";
import Line from "../components/GlobalFunctions/Line";
import UpdateTitle from "../components/updateComps/UpdateTitle";
import UpdateHourlyRate from "../components/updateComps/UpdateHourlyRate";
import LinkSvg from "../SVGs/LinkSvg";
import Overview from "../components/Overview/Overview";
import Article from "../components/Article/Article";
import ProfileItem from "../components/ProfileItem/ProfileItem";
import Profileicon from "../components/ProfileItem/Profileicon";
import AddSvg from "../SVGs/AddSvg";
import SubmitBtn from "../components/SubmitBtn";

const Profile = () => {
  const { theUser, isLoading } = useSelector((state) => state.user);
  const { name, jobTitle, hourlyRate, overview } = theUser;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, [jobTitle, name, jobTitle, hourlyRate, overview]);

  return (
    <Container>
      <HeadSection>
        <Flex1>
          <Avatar>
            <EditAvatar>
              <i
                className="fa-solid fa-pen-to-square"
                style={{ color: "green" }}
              ></i>
            </EditAvatar>
            <Online />
          </Avatar>
          <Description>
            <h2>{isLoading ? <Spinner /> : name}</h2>
            <p> Gaza, Palestinian Territories – 2:30 pm local time</p>
            <p>
              <OnlineStatus />
            </p>
          </Description>
        </Flex1>
        <Actions>
          <SubmitBtn text="See Public View" />
          <PrimaryBtn title="Profile Settings" />
        </Actions>
      </HeadSection>
      <MainSection>
        <Column1>
          <ProfileItem
            title="View profile"
            icon={
              <Profileicon>
                <EditSvg />
              </Profileicon>
            }
          >
            <AddSvg />
          </ProfileItem>
          <AllWork>
            <P>All Work</P>
            <i
              style={{ color: "#fff" }}
              className="fa-solid fa-chevron-right"
            ></i>
          </AllWork>
          <Line />
          <ProfileItem title="Video introduction">
            <AddSvg />
          </ProfileItem>

          <ProfileItem title="Hours per week ">
            <EditSvg />
          </ProfileItem>
          <ProfileItem
            title="Languages"
            icon={
              <Profileicon>
                <EditSvg />
              </Profileicon>
            }
          >
            <AddSvg />
          </ProfileItem>
          <ProfileItem title="Verifications">
            <AddSvg />
          </ProfileItem>
          <ProfileItem title="Education ">
            <AddSvg />
          </ProfileItem>
        </Column1>
        <Column2>
          <JobDescription>
            <ProfileItem
              title={`${isLoading ? <Spinner /> : jobTitle}`}
              component={<UpdateTitle job={jobTitle} />}
            >
              <EditSvg />
            </ProfileItem>
            <ProfileItem
              component={<UpdateHourlyRate />}
              title={`${hourlyRate}.00$`}
              icon={
                <Profileicon>
                  <LinkSvg />
                </Profileicon>
              }
            >
              <EditSvg />
            </ProfileItem>
          </JobDescription>
          <Overview view={overview} />
          <Section>
            <Article
              title="Work History"
              body="No work yet. Once you start getting hired on Upwork, your work with clients will show up here. Start your search"
            />
          </Section>
          <Section>
            <ProfileItem title="Skills">
              <EditSvg />
            </ProfileItem>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium perferendis consequuntur vel similique quasi harum?
            </p>
          </Section>
          <Section>
            <Article
              title="Your Project Catalog "
              body="Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients."
            />
          </Section>
        </Column2>
      </MainSection>
    </Container>
  );
};

export default Profile;
