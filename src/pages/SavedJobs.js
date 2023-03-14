import React from "react";
import { useSelector } from "react-redux";
import Job from "../components/Job";

const SavedJobs = () => {
  const { savedJobs } = useSelector((state) => state.jobs);
  return (
    <div>
      {savedJobs?.map((item) => {
        return <Job key={item.id} {...item} />;
      })}
    </div>
  );
};

export default SavedJobs;
