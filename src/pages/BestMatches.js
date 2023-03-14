import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "../components/Job";
import { Spinner } from "../global/style";
import { getAllJobs } from "../redux/JobsSlice";
const skills = ["CSS", "CSS 3", "HTML5", "REACT", "JAVASCRIPT"];

const BestMatches = () => {
  const { jobsData, isLoading, error } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs(page));
  }, [page]);
  const handleNextPage = () => {
    page < 3 ? setPage(page + 1) : setPage(3);
    dispatch(getAllJobs(page + 1));
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
      {page < 3 && <button onClick={handleNextPage}>Load More</button>}
    </>
  );
};

export default BestMatches;
