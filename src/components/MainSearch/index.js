import { letterSpacing } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getHistory,
  getSearchHistory,
  sendSearchHistory,
} from "../../redux/JobsSlice";

import { Input, SearchContainer, SearchIcon } from "./style";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const { history } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendSearchHistory(query));
    dispatch(getHistory());
  }, [query]);
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
    </div>
  );
};

export default MainSearch;
