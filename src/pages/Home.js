import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../global/style";
import Greeting from "../components/Greeting";
import MainSearch from "../components/MainSearch";
import SideProfile from "../components/sideprofile";
import SideSection from "../components/sideSection";
import { PATHS } from "../Routes";
import axios from "axios";
import { useSelector } from "react-redux";

const Feed = styled.div`
  border: 1px solid #e4ebe4;
  padding: 1rem;
  border-radius: 15px;
`;
const Profile = styled.div`
  border: 1px solid #e4ebe4;
  padding: 1rem 0;
  border-radius: 15px;
`;
const Text = styled.h2`
  margin: 0.5rem 0;
`;
const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
const StyledLink = styled(NavLink)`
  color: green;
  text-decoration: none;
  padding: 0.5rem 0;
`;
const Home = () => {
  const saved = useSelector((state) => state.jobs.savedJobs);

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const id = localStorage.getItem("id");
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${id}`);
      if (response) {
        setName(response.data.name);
        setJobTitle(response.data.jobTitle);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, [id, setName, setJobTitle]);

  useEffect(() => {
    fetchData();
  }, [name, jobTitle]);
  return (
    <>
      <Wrapper>
        <div>
          <Greeting name={name} />
          <MainSearch />

          <Feed>
            <Text>Jobs you might like</Text>
            <Tabs>
              <StyledLink
                to={`${PATHS.BESTMATCHES}`}
                end
                activeClassName="active"
              >
                Best Matches
              </StyledLink>
              <StyledLink
                to={`${PATHS.MOSTRECENT}`}
                end
                activeClassName="active"
              >
                Most Recent
              </StyledLink>
              <StyledLink
                to={`${PATHS.SAVEDJOBS}`}
                end
                activeClassName="active"
              >
                Saved Jobs ({saved.length})
              </StyledLink>
            </Tabs>
            <Outlet />
          </Feed>
        </div>
        <div>
          <Profile>
            <SideProfile name={name} jobTitle={jobTitle} />
          </Profile>
          <SideSection
            title="Proposals"
            desc="My Proposals"
            body="Looking for work? Browse jobs and get started on a proposal."
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
