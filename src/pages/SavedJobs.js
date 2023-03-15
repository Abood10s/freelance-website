import React from "react";
import { useSelector } from "react-redux";
import Job from "../components/Job";
import NoSavedSvg from "../SVGs/NoSavedSvg";

const SavedJobs = () => {
  const saved = useSelector((state) => state.jobs.savedJobs);

  return (
    <div>
      {saved?.map((item) => {
        return <Job key={item.id} {...item} />;
      })}
      {saved.length === 0 && <NoSavedSvg />}
    </div>
  );
};

export default SavedJobs;
