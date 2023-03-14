import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Input, SearchContainer, SearchIcon } from "./style";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const { savedJobs } = useSelector((state) => state.jobs);

  return (
    <>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search for job"
          onChange={(e) => setQuery(e.target.value)}
        />
        {query ? (
          <Link to={`/search/${query}`}>
            <SearchIcon>
              <i className="fa-solid fa-magnifying-glass"></i>
            </SearchIcon>
          </Link>
        ) : (
          <SearchIcon>
            <i className="fa-solid fa-magnifying-glass"></i>
          </SearchIcon>
        )}
      </SearchContainer>
    </>
  );
};

export default MainSearch;
