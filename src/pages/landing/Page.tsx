import { useQuery } from "@apollo/client";
import { Link } from "wouter";
import { gql } from "../../generated/gql";

const GET_PATIENTS = gql(`
  query allPatients {
    patients {
      id
      name
    }
  }
`);

const Page = () => {
  const { loading, data, error } = useQuery(GET_PATIENTS);

  return (
    <div>
      <ul>
        {data?.patients.map((patient) =>
          <li><Link to={`/patient/${patient.id}`}>{patient.name}</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Page;
