import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Buttons } from "../../Modals/EditModal";
import { EditField } from "../../redux/UserSlice";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  @media (max-width: 800px) {
    font-size: 15px;
    padding: 0.5rem;
  }
`;
const Desc = styled.div``;
const Inputs = styled.div`
  display: flex;
  align-items: center;
`;
const HourInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.Global.borderColor};
  outline: none;
  text-align: end;
  @media (max-width: 800px) {
    width: 45px;
  }
`;

const HourRate = ({ title, desc, disabled, value, update }) => {
  const { theUser, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [hourly, setHourly] = useState(value);
  return (
    <Cont>
      <Desc>
        <h4>{title}</h4>
        {desc ? <p> {desc} </p> : null}
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
        <Buttons>
          <PrimaryBtn
            title="Save"
            func={() =>
              hourly !== value &&
              hourly !== "" &&
              dispatch(EditField("hourlyRate", hourly))
            }
          />
        </Buttons>
      )}
    </Cont>
  );
};

export default HourRate;
