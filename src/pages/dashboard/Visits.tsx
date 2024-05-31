import type { GetPatientQuery } from "../../generated/graphql";

type Props = {
  visits: GetPatientQuery["patients"][number]["visits"];
};

const Visits = ({ visits }: Props) => <h1>Visits</h1>;

export default Visits;
