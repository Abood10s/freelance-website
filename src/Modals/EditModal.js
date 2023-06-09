import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
const Modal = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: ${(props) => props.theme.Global.borderRadius};
  overflow-y: auto;
  @media (max-width: 800px) {
    padding: 1rem 1.5rem;
    width: 90%;
  }
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;
const Content = styled.div`
  display: grid;
  place-items: center;
`;
export const Buttons = styled.div`
  margin-top: ${(props) => props.mt};
  margin-left: 0.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${(props) => props.theme.Global.txtGreen};
  cursor: pointer;
  gap: 1em;
`;
const EditModal = ({ open, onClose, children }) => {
  return ReactDOM.createPortal(
    open ? (
      <>
        <Overlay onClick={onClose} />
        <Modal>
          <Content>{children || <h3>New Feature Coming soon..</h3>}</Content>
          <Buttons>
            <p onClick={onClose}>Cancel</p>
          </Buttons>
        </Modal>
      </>
    ) : null,
    document.getElementById("portal")
  );
};

export default EditModal;
