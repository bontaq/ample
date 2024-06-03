import { styled } from "styled-components";

type Props = {
  text: string;
  value: string | number | null | undefined;
};

const Measurement = ({ text, value }: Props) => (
  <div>
    <Title>{text}</Title>
    <Value>{value}</Value>
  </div>
);

const Title = styled.h4`
  color: grey;
`;

const Value = styled.h2``;

export default Measurement;
