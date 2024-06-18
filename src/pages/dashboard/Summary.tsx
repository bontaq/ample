import { styled } from "styled-components";
import type { GetPatientQuery } from "../../generated/graphql";
import Chart from "./Chart";

type Props = {
  visits: GetPatientQuery["patients"][number]["visits"];
  focus: string | null;
};

const Summary = ({ visits, focus }: Props) => {
  // dates oldest first for charting
  const orderedVisits = visits.slice().reverse();

  const heartRateData = orderedVisits.map((visit) => ({
    date: visit.administration_time,
    y: [{ key: "BPM", value: visit.heart_rate ?? 0 }],
  }));

  const bloodPressureData = orderedVisits.map((visit) => ({
    date: visit.administration_time,
    y: [
      { key: "systolic", value: visit.systolic_pressure ?? 0 },
      { key: "diastolic", value: visit.diastolic_pressure ?? 0 },
    ],
  }));

  const painData = orderedVisits.map((visit) => ({
    date: visit.administration_time,
    y: [{ key: "Pain", value: visit.pain_level ?? 0 }],
  }));

  const toleranceData = orderedVisits.map((visit) => ({
    date: visit.administration_time,
    y: [{ key: "Tolerance", value: visit.tolerance ?? "" }],
  }));

  return (
    <Container>
      <h1>Summary</h1>
      <Charts>
        <Chart
          title="Heart Rate"
          values={heartRateData}
          focused={focus === "heart-rate"}
        />
        <Chart
          title="Blood Pressure"
          values={bloodPressureData}
          focused={focus === "blood-pressure"}
        />
        <Chart
          title="Pain"
          values={painData}
          focused={focus === "pain"}
        />
        <Chart
          title="Tolerance"
          values={toleranceData}
          kind="band"
          domain={["poor", "fair", "good"]}
          focused={focus === "tolerance"}
        />
      </Charts>
    </Container>
  );
};

const Charts = styled.div`
  display: flex;
  text-align: center;
`;

const Container = styled.div`
  text-align: center;
`;

export default Summary;
