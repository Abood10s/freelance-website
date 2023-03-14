import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Job from "../components/Job";
import { Spinner } from "../global/style";
import { getAllJobs } from "../redux/JobsSlice";
const skills = ["CSS", "CSS 3", "HTML5", "REACT", "JAVASCRIPT"];
export const LoadMore = styled.button`
  color: #fff;
  background-color: ${(props) => props.theme.Global.txtGreen};
  display: block;
  padding: 0.8em 1.5em;
  border-radius: 50px;
  white-space: nowrap;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  margin: 1rem auto;
`;
const BestMatches = () => {
  const { jobsData, isLoading, error, totalCount } = useSelector(
    (state) => state.jobs
  );
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs(page));
  }, [page]);
  // const handleNextPage = () => {
  //   page < 3 ? setPage(page + 1) : setPage(3);
  //   dispatch(getAllJobs(page + 1));
  // };
  const handleNextPage = () => {
    page < Math.ceil(totalCount / 5)
      ? setPage(page + 1)
      : setPage(Math.ceil(totalCount / 5));
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        jobsData?.map((job) => {
          return <Job key={job.id} {...job} skills={skills} theJob={job} />;
        })
      )}
      {/* {page < 3 && <button onClick={handleNextPage}>Load More</button>}*/}
      {page < Math.ceil(totalCount / 5) && (
        <LoadMore onClick={handleNextPage}>Load More</LoadMore>
      )}
    </>
  );
};

export default BestMatches;
