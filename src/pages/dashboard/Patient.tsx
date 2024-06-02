type Props = {
  name: string;
  phone: string;
  email: string;
};

const Patient = ({ name, phone, email }: Props) => (
  <div>
    <h1>{name}</h1>
    <p>{phone}</p>
    <p>{email}</p>
  </div>
);

export default Patient;
