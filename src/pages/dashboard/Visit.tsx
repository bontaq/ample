import { styled } from "styled-components";
import type { GetPatientQuery } from "../../generated/graphql";

type Props = {
  visit: GetPatientQuery["patients"][number]["visits"][number];
};

const Visit = ({ visit }: Props) => (
  <Container>
    <div>
      <h4>{visit.administration_time}</h4>
      <h2>{visit.medication}</h2>
      <p>At: {visit.administration_location}</p>
      <p>By: {visit.nurse?.name}</p>
      <p>Note: {visit.note}</p>
    </div>
    <ValuesContainer>
      <Value text="Heart Rate" value={visit.heart_rate} />
      <Value
        text="Blood Pressure"
        value={`${visit.systolic_pressure} / ${visit.diastolic_pressure}`}
      />
      <Value text="Pain" value={visit.pain_level} />
      <Value text="Tolerance" value={visit.tolerance} />
    </ValuesContainer>
  </Container>
);

const Value = ({
  text,
  value,
}: {
  text: string;
  value: string | null | number | undefined;
}) => (
  <div>
    <ValueTitle>{text}</ValueTitle>
    <Measurement>
      <b>{value}</b>
    </Measurement>
  </div>
);

const ValueTitle = styled.h4`
  color: grey;
`;

const Measurement = styled.h2``;

const ValuesContainer = styled.div`
  display: flex;
  div {
    margin: 0px 20px;
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Visit;
