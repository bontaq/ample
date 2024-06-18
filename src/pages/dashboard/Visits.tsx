import { styled } from "styled-components";
import type { GetPatientQuery } from "../../generated/graphql";
import Visit from "./Visit";

type Props = {
  visits: GetPatientQuery["patients"][number]["visits"];
  focus: string | null;
};

const Visits = ({ visits }: Props) => (
  <div>
    <Title>Visits</Title>
    {visits.map((visit) => (
      <Visit visit={visit} />
    ))}
  </div>
);

const Title = styled.h1`
  text-align: center;
`;

export default Visits;
