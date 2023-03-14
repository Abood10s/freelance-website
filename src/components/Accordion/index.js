import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterJobs } from "../../redux/JobsSlice";
import { Content, Header, InputWrap, Wrap } from "./style";

const Accordion = ({ title, data, filter }) => {
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  return (
    <Wrap>
      <Header onClick={() => setShow(!show)}>
        <h4>{title}</h4>
        <p>
          <i
            className={`fa-solid fa-chevron-${show ? "up" : "down"}`}
            style={{ color: "green" }}
          ></i>
        </p>
      </Header>
      {show && (
        <Content>
          {data?.map((item) => {
            return (
              <InputWrap key={item}>
                <input
                  type="checkbox"
                  id={item}
                  value={item}
                  onChange={() => dispatch(filterJobs(filter, item))}
                />
                <label htmlFor={item}>{item}</label>
              </InputWrap>
            );
          })}
        </Content>
      )}
    </Wrap>
  );
};

export default Accordion;
