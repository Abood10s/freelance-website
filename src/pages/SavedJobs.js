import React from "react";
import { useSelector } from "react-redux";
import Job from "../components/Job";
import NoSavedSvg from "../SVGs/NoSavedSvg";

const SavedJobs = () => {
  const { savedJobs } = useSelector((state) => state.jobs);
  return (
    <div>
      {savedJobs?.map((item) => {
        return <Job key={item.id} {...item} />;
      })}
      {savedJobs.length === 0 && <NoSavedSvg />}
    </div>
  );
};

export default SavedJobs;
