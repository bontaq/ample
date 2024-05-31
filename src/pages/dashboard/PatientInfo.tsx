type Props = {
  name: string;
  phone: string;
  email: string;
}

const PatientInfo = ({ name, phone, email }: Props) => (
  <div>
    <h1>{name}</h1>
    <h2>{phone}</h2>
    <h2>{email}</h2>
  </div>
)

export default PatientInfo;
