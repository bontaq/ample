import { styled } from "styled-components";

type Props = {
  name: string;
  phone: string;
  email: string;
};

const Patient = ({ name, phone, email }: Props) => (
  <View>
    <h1>{name}</h1>
    <p>{phone}</p>
    <p>{email}</p>
  </View>
);

const View = styled.div`
  margin: 0 60px;
`;

export default Patient;
