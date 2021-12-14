import { FC } from "react";
import styled, { useTheme } from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colorPrimary50};
  background: ${(props) => props.theme.colorDark50};
  border: 1px solid ${(props) => props.theme.colorDark20};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colorDark20};
  }
`;

const RevalidateButton: FC = () => {
  const theme = useTheme();
  return <Button theme={theme}>More</Button>;
};

export { RevalidateButton };
