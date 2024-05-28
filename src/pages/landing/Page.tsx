import { useQuery } from "@apollo/client";
import { gql } from "../../generated/gql";

const GET_PATIENTS = gql(`
  query allPatients {
    patients {
      name
    }
  }
`);

const Page = () => {
  const { loading, data, error } = useQuery(GET_PATIENTS);

  return <div>{data?.patients.map((patient) => <li>{patient.name}</li>)}</div>;
};

export default Page;
