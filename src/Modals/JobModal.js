import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import SubmitBtn from "../components/SubmitBtn";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Verified from "../SVGs/VerifiedSvg";
import { Skills } from "../components/Job/style";
import Chip from "../components/Chip";
import { saveJob } from "../redux/JobsSlice";
import { useDispatch } from "react-redux";

const Modal = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 35%;
  bottom: 0;
  z-index: 1000;
  border-radius: ${(props) => props.theme.Global.borderRadius};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  overflow-y: auto;
  @media (max-width: 768px) {
    left: 15%;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Grid = styled.div`
  margin: 2rem auto;
  border-radius: ${(props) => props.theme.Global.borderRadius};
  border: 1px solid #d5e0d5;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Col1 = styled.div`
  border-radius: ${(props) => props.theme.Global.borderRadius};
  padding: 1.5rem;
`;
const Col2 = styled.div`
  border-left: 1px solid #d5e0d5;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 1.5rem 1rem;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;
const Line = styled.div`
  height: 1px;
  background-color: #d5e0d5;
  width: 100%;
  padding: 0 -0.5rem;
  margin: 0.5rem 0;
`;
const JobModal = ({ open, onClose, children, thejob }) => {
  const randomNumber = Math.floor(Math.random() * 60) + 1;
  const dispatch = useDispatch();
  const { topic, payInfo, body, skills, proposals, payment, location, level } =
    thejob || {};
  return ReactDOM.createPortal(
    open ? (
      <>
        <Overlay onClick={onClose} />
        <Modal>
          <Flex>
            <i className="fa-solid fa-chevron-left" onClick={onClose}></i>
            <p style={{ color: "green", textDecoration: "underline" }}>
              Open job in a new window
            </p>
          </Flex>
          <Grid>
            <Col1>
              <h2 style={{ marginBottom: "2rem " }}>
                {topic ? topic : "saved job"}
              </h2>
              <p style={{ color: "green" }}>{level} Level</p>
              <p style={{ margin: "0.5rem 0" }}>
                Posted {randomNumber} minutes ago
              </p>
              <p>{payInfo}</p>
              <Line />
              <p
                style={{
                  padding: "1em 0",
                  lineHeight: "2em",
                  color: "#1F391F",
                }}
              >
                {body}
              </p>
              <h4 style={{ margin: "1rem 0" }}>Skills and Expertise</h4>
              <Skills>
                {skills?.map((skill) => {
                  return <Chip key={skill} title={skill} />;
                })}
              </Skills>
              <Line />
              <h3 style={{ margin: "1rem 0" }}>Activity on this job</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <p>Proposals: {proposals}</p>
                <p>Interviewing:0</p>
                <p>Invites sent:0</p>
                <p>Unanswered invites: 0</p>
              </div>
            </Col1>
            <Col2>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1em",
                }}
              >
                <PrimaryBtn title="Apply Now" />
                <SubmitBtn
                  text="Save Job"
                  onClick={() => dispatch(saveJob(thejob))}
                />
              </div>
              <p style={{ color: "green" }}>Flag as inappropriate</p>
              <p>Send a proposal for: 4 Connects</p>
              <p>Available Connects: 134</p>
              <Line />
              <h3>About the client</h3>
              <p>
                <Verified />
                {payment}
              </p>
              <p>{location}</p>
              <span>Sheridan 12:56 pm</span>
              <p>{proposals} proposals</p>
            </Col2>
          </Grid>
        </Modal>
      </>
    ) : null,
    document.getElementById("portal")
  );
};

export default JobModal;
