import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterJobs } from "../../redux/JobsSlice";
import { Content, Header, InputWrap, Wrap } from "./style";

const Accordion = ({ title, data, filter, searched }) => {
  const [show, setShow] = useState(true);
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxClick = (item) => {
    const newState = { ...checkboxStates };
    newState[item] = !newState[item];
    setCheckboxStates(newState);
    dispatch(filterJobs(filter, item, searched));
    console.log(newState[item]);
    if (!newState[item]) dispatch(filterJobs("", "", searched));
  };
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
            const isChecked = checkboxStates[item] || false;
            return (
              <InputWrap key={item}>
                <input
                  type="checkbox"
                  id={item}
                  value={item}
                  style={{ accentColor: "green" }}
                  onClick={() => handleCheckboxClick(item)}
                  defaultChecked={isChecked}
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
