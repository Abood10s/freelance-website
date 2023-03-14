import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Buttons } from "../../Modals/EditModal";
import { EditField } from "../../redux/UserSlice";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { Cont, Edit } from "./UpdateTitle";
const TextArea = styled.textarea`
  border: 2px solid ${(props) => props.theme.Global.borderColor};
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
const UpdateOverview = ({ view }) => {
  const dispatch = useDispatch();
  const [overview, setOverview] = useState(view);
  return (
    <Cont>
      <div>
        <h3>Overview</h3>
      </div>
      <Edit>
        <h5>
          Use this space to show clients you have the skills and experience
          they're looking for.
        </h5>
        <p>
          <ul style={{ paddingLeft: "1rem" }}>
            <li>Describe your strengths and skills</li>
            <li>Highlight projects, accomplishments and education</li>
            <li>Keep it short and make sure it's error-free</li>
          </ul>
        </p>
        <TextArea
          rows={10}
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        ></TextArea>

        <Buttons>
          <PrimaryBtn
            title="Save"
            func={() => dispatch(EditField("overview", overview))}
          />
        </Buttons>
      </Edit>
    </Cont>
  );
};

export default UpdateOverview;
