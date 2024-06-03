import { styled } from "styled-components";
import type { GetPatientQuery } from "../../generated/graphql";
import Measurement from "./Measurement";

type Props = {
  visit: GetPatientQuery["patients"][number]["visits"][number];
};

const Visit = ({ visit }: Props) => {
  const visitTime = new Date(visit.administration_time);
  const formattedVisitTime = visitTime.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Container>
      <Split>
        <div>
          <Time>{formattedVisitTime}</Time>
          <h2>
            {visit.medication} {visit.medication_amount}
          </h2>
          <p>At: {visit.administration_location}</p>
          <p>By: {visit.nurse?.name}</p>
        </div>
        <MeasurementsContainer>
          <Measurement text="Heart Rate" value={visit.heart_rate} />
          <Measurement
            text="Blood Pressure"
            value={`${visit.systolic_pressure} / ${visit.diastolic_pressure}`}
          />
          <Measurement text="Pain" value={visit.pain_level} />
          <Measurement text="Tolerance" value={visit.tolerance} />
        </MeasurementsContainer>
      </Split>
      <p>Note: {visit.note}</p>
    </Container>
  );
};

const Time = styled.h4`
  color: grey;
`;

const MeasurementsContainer = styled.div`
  display: flex;
  div {
    margin: 0px 20px;
    text-align: center;
  }
`;

const Split = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 1256px;
  border-top: 1px dashed grey;
`;

export default Visit;
