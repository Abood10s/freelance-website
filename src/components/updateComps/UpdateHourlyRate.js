import React from "react";
import { useSelector } from "react-redux";
import { CalculateHourlyRate } from "../GlobalFunctions";
import HourRate from "./HourRate";
import { Cont, Edit } from "./UpdateTitle";

const UpdateHourlyRate = () => {
  const { theUser } = useSelector((state) => state.user);
  const { hourlyRate } = theUser;
  const { percentage, total } = CalculateHourlyRate(hourlyRate);

  return (
    <Cont>
      <div>
        <h3>Change hourly rate</h3>
      </div>
      <Edit>
        <h5>
          Please note that your new hourly rate will only apply to new
          contracts.
        </h5>
        <p>
          The Upwork Service Fee is 20% when you begin a contract with a new
          client. Once you bill over $500 with your client, the fee will be 10%.
        </p>
      </Edit>
      <div style={{ width: "100%" }}>
        <HourRate
          title="Hourly Rate"
          desc="Total amount the client will see"
          value={hourlyRate}
          update={true}
        />{" "}
        <HourRate
          disabled={true}
          title="20% Upwork Service Fee"
          value={percentage}
        />{" "}
        <HourRate
          title="You'll Receive"
          desc="The estimated amount you'll receive after service fees"
          value={total}
        />
      </div>
    </Cont>
  );
};

export default UpdateHourlyRate;
