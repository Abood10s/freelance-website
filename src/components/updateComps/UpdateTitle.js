import React, { useDeferredValue, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Buttons } from "../../Modals/EditModal";
import { EditField } from "../../redux/UserSlice";
import PrimaryBtn from "../buttons/PrimaryBtn";

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding-bottom: 2em 1.5em;
  @media (max-width: 800px) {
    padding: 0.5em;
  }
`;
export const Input = styled.input`
  border-radius: 6px;
  padding: 0.7rem;
  border: 2px solid ${(props) => props.theme.Global.borderColor};
  display: block;
  width: 100%;
`;
export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;
`;
const UpdateTitle = ({ job }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(job);
  return (
    <Cont>
      <div>
        <h3>Edit your title</h3>
      </div>
      <Edit>
        <h5>Your title</h5>
        <p>
          Enter a single sentence description of your professional
          skills/experience (e.g. Expert Web Designer with Ajax experience)
        </p>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Buttons>
          <PrimaryBtn
            title="Save"
            func={() => {
              title !== job &&
                title !== "" &&
                dispatch(EditField("jobTitle", title));
            }}
          />
        </Buttons>
      </Edit>
    </Cont>
  );
};

export default UpdateTitle;
