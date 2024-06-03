import { styled } from "styled-components";
import { useQuery } from "@apollo/client";
import { RouteComponentProps } from "wouter";
import { gql } from "../../generated";
import Patient from "./Patient";
import Summary from "./Summary";
import Visits from "./Visits";

type PageType = React.ComponentType<RouteComponentProps<{ id: string }>>;

const GET_PATIENT = gql(`
  query getPatient($id: Int!) {
    patients(where: {id: {_eq: $id}}) {
      name
      phone
      email
      visits(order_by: { administration_time: desc }) {
        administration_location
        administration_time
        medication
        medication_amount
        pain_level
        heart_rate
        systolic_pressure
        diastolic_pressure
        tolerance
        note
        nurse {
          name
          phone
        }
      }
    }
  }
`);

const Page: PageType = ({ params }) => {
  const { loading, data, error } = useQuery(GET_PATIENT, {
    variables: { id: parseInt(params.id) },
  });

  if (loading) {
    return null;
  }

  if (error) {
    return <h2>error</h2>;
  }

  if (data?.patients && data?.patients.length === 0) {
    return <h2>Patient could not be found, patient id: {params.id}</h2>;
  }

  if (data?.patients && data?.patients.length > 1) {
    return <h2>Data integrity problem with patient id: {params.id}</h2>;
  }

  return (
    <Container>
      {data?.patients.map((patient) => (
        <>
          <Patient {...patient} />
          <div>
            <Summary visits={patient.visits} />
            <Visits visits={patient.visits} />
          </div>
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 25px;
  display: flex;
`;

export default Page;
