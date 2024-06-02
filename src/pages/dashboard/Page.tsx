import { useQuery } from "@apollo/client";
import { RouteComponentProps } from "wouter";
import { gql } from "../../generated";
import Container from "../../design/Container";
import Patient from "./Patient";
import Visits from "./Visits";

type PageType = React.ComponentType<RouteComponentProps<{ id: string }>>;

const GET_PATIENT = gql(`
  query getPatient($id: Int!) {
    patients(where: {id: {_eq: $id}}) {
      name
      phone
      email
      visits {
        administration_location
        administration_time
        medication
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

  return (
    <Container>
      {data?.patients.map((patient) => (
        <>
          <Patient {...patient} />
          <Visits visits={patient.visits} />
        </>
      ))}
    </Container>
  );
};

export default Page;
