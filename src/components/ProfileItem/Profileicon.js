import React, { useState } from "react";
import styled from "styled-components";
import EditModal from "../../Modals/EditModal";
const Wrapper = styled.div`
  border-radius: 50%;
  border: 2px solid #e4ebe4;
  padding: 0.3rem;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #f2f7f2;
  }
`;
const Profileicon = ({ children, component, modal }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {modal ? null : (
        <EditModal open={isOpen} onClose={() => setIsOpen(false)}>
          {component}
        </EditModal>
      )}

      <Wrapper onClick={() => setIsOpen(true)}>{children}</Wrapper>
    </>
  );
};

export default Profileicon;
