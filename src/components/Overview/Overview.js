import React from "react";
import styled from "styled-components";
import Profileicon from "../ProfileItem/Profileicon";
import UpdateOverview from "../updateComps/UpdateOverview";
import EditSvg from "../../SVGs/EditSvg";
const Container = styled.div`
  display: grid;
  grid-template-columns: 94% 6%;
  margin: 1.5rem 0;
`;
const Text = styled.div`
  line-height: 1.5rem;
  font-size: 15px;
`;
const Overview = ({ view }) => {
  return (
    <Container>
      <Text>{view}</Text>
      <Profileicon component={<UpdateOverview view={view} />}>
        <EditSvg />
      </Profileicon>
    </Container>
  );
};

export default Overview;
