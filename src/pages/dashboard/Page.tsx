import { useQuery } from "@apollo/client";
import { RouteComponentProps } from "wouter";
import { gql } from "../../generated";
import PatientInfo from './PatientInfo';

type PageType = React.ComponentType<RouteComponentProps<{ id: string }>>

const GET_PATIENT = gql(`
  query getPatient($id: Int!) {
    patients(where: {id: {_eq: $id}}) {
      name
      phone
      email
      visits {
        administration_location
        administration_time
        nurse {
          name
          phone
        }
      }
    }
  }
`)

const Page: PageType = ({ params }) => {
  const { loading, data , error } = useQuery(GET_PATIENT, {
    variables: { id: parseInt(params.id) }
  });

  if (loading) {
    return null;
  }

  if (error) {
    return <h2>error</h2>
  }

  return (
    <div>
        {data?.patients.map(patient => <PatientInfo {...patient} />)}
        {params.id}
    </div>
  )
};

export default Page;
