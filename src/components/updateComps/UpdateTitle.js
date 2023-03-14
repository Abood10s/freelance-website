import React, { useDeferredValue, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { EditField } from "../../redux/UserSlice";

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
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
        <button onClick={() => dispatch(EditField(1, "jobTitle", title))}>
          update
        </button>
      </Edit>
    </Cont>
  );
};

export default UpdateTitle;
