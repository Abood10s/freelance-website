import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { EditField } from "../../redux/UserSlice";

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;
const Desc = styled.div``;
const Inputs = styled.div``;
const HourInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.Global.borderColor};
  outline: none;
  text-align: end;
`;

const HourRate = ({ title, desc, disabled, value, update }) => {
  const { theUser, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [hourly, setHourly] = useState(value);
  return (
    <Cont>
      <Desc>
        <h4>{title}</h4>
        {desc ? <p>{desc}</p> : null}
      </Desc>
      <Inputs>
        <HourInput
          disabled={disabled}
          value={`${hourly}`}
          onChange={(e) => setHourly(e.target.value)}
        />
        /hr
      </Inputs>
      {update && (
        <button onClick={() => dispatch(EditField(1, "hourlyRate", hourly))}>
          update
        </button>
      )}
    </Cont>
  );
};

export default HourRate;