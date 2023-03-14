import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "../components/Job";
import { Spinner } from "../global/style";
import { getAllRecentJobs } from "../redux/JobsSlice";
const skills = ["CSS", "CSS 3", "HTML5", "REACT", "JAVASCRIPT"];

const MostRecent = () => {
  const { recentJobs, isLoading, error } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRecentJobs(page));
  }, [page]);
  const handleNextPage = () => {
    page < 3 ? setPage(page + 1) : setPage(3);
    dispatch(getAllRecentJobs(page + 1));
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        recentJobs?.map((job) => {
          return <Job key={job.id} {...job} skills={skills} theJob={job} />;
        })
      )}
      {page < 3 && <button onClick={handleNextPage}>Load More</button>}
    </>
  );
};

export default MostRecent;
