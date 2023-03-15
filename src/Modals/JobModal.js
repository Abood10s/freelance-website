import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Modal = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 35%;
  z-index: 1000;
  border-radius: ${(props) => props.theme.Global.borderRadius};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;
const JobModal = ({ open, onClose, children, thejob }) => {
  const { topic, payInfo, body, skills, proposals, payment, location } =
    thejob || {};
  return ReactDOM.createPortal(
    open ? (
      <>
        <Overlay onClick={onClose} />
        <Modal>
          <div>
            <i className="fa-solid fa-chevron-left" onClick={onClose}></i>
          </div>
          {topic ? topic : "saved job"}
          <button onClick={onClose}>Cancel</button>
          <button>Save</button>
        </Modal>
      </>
    ) : null,
    document.getElementById("portal")
  );
};

export default JobModal;
