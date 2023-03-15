import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Job from "../components/Job";
import { getAllSearchedJobs } from "../redux/JobsSlice";
import Noresults from "../assets/searcherror.png";
import { Spinner, Wrapper } from "../global/style";
import Accordion from "../components/Accordion";
import MainSearch from "../components/MainSearch";
import SubmitBtn from "../components/SubmitBtn";
export const Sorry = styled.div`
  width: 70%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobsWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.Global.borderColor};
  border-radius: ${(props) => props.theme.Global.borderRadius};
  overflow: hidden;
`;
const ErrImg = styled.img`
  height: 300px;
`;
const SaveSearch = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0.5rem 1rem;
`;
const Search = () => {
  const { query } = useParams();
  const { searchedJobs, isLoading, error, saveJob } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSearchedJobs(query));
  }, [query]);
  return (
    <Wrapper reverse={true} border={true}>
      <div>
        <h3>Filter By</h3>
        <Accordion
          title="Experience level"
          data={["Entry Level", "Intermediate", "Expert"]}
          filter="level"
          searched={query}
        />
        <Accordion
          title="Number of proposals"
          data={["less than 5", "5 to 10", "15 to 20", "20 to 50"]}
          filter="proposals"
          searched={query}
        />
        <Accordion
          title="Client info"
          data={["My previous clients", "Payment verified"]}
        />
        <Accordion
          title="Client history"
          data={["No hires", "1 to 9 hires ", "10+ hires"]}
        />
      </div>
      <JobsWrapper>
        <SaveSearch>
          <MainSearch />
          <SubmitBtn text="Save search" />
          <h4 style={{ color: "green" }}>{searchedJobs.length} jobs found</h4>
        </SaveSearch>
        {isLoading ? (
          <Spinner />
        ) : searchedJobs.length > 0 ? (
          searchedJobs.map((job) => {
            return <Job key={job.id} {...job} theJob={job} />;
          })
        ) : (
          <Sorry>
            <ErrImg src={Noresults} alt="No results Were found" />
            <p>sorry no results were found on "{query}"</p>
          </Sorry>
        )}
      </JobsWrapper>
    </Wrapper>
  );
};

export default Search;
