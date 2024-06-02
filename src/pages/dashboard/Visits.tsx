import type { GetPatientQuery } from "../../generated/graphql";
import Visit from "./Visit";

type Props = {
  visits: GetPatientQuery["patients"][number]["visits"];
};

const Visits = ({ visits }: Props) => (
  <div>
    {visits.map((visit) => (
      <Visit visit={visit} />
    ))}
  </div>
);
export default Visits;
