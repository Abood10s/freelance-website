import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../global/style";
import Greeting from "../components/Greeting";
import MainSearch from "../components/MainSearch";
import SideProfile from "../components/sideprofile";
import SideSection from "../components/sideSection";
import { PATHS } from "../Routes";

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
  return (
    <>
      <Wrapper>
        <div>
          <Greeting />
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
                Saved Jobs
              </StyledLink>
            </Tabs>
            <Outlet />
          </Feed>
        </div>
        <div>
          <Profile>
            <SideProfile />
          </Profile>
          <SideSection
            title="Proposals"
            desc="My Proposals"
            body="Looking for work? Browse jobs and get started on a proposal."
          />
        </div>
        {/* <div style={{ width: "100%" }}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
  
              <button type="submit">Submit</button>
            </form>
          </div> */}
      </Wrapper>
    </>
  );
};

export default Home;
