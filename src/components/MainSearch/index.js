import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Input, SearchContainer, SearchIcon } from "./style";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const { history } = useSelector((state) => state.jobs);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
      {history.length > 0 ? (
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span>Recent Searches:</span>

          {history?.map((item, index) => {
            return (
              <div key={index}>
                <span style={{ color: "green" }}>{item}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default MainSearch;
