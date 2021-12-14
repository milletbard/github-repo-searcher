import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { IThemeType } from "components/GlobalStyle";

import { HeaderGithubIcon } from "./HeaderGithubIcon";

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colorDark50};
  color: ${(props) => props.theme.colorPrimary100};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  padding: 16px;
`;

const StyleHeader = styled.header`
  width: 100%;
  max-width: 768px;
`;

interface IHeaderProps {
  children: React.ReactNode;
}

const Header: FC<IHeaderProps> = ({ children }) => {
  const theme: IThemeType = useTheme();

  return (
    <HeaderWrapper theme={theme}>
      <StyleHeader>{children}</StyleHeader>

      <HeaderGithubIcon />
    </HeaderWrapper>
  );
};

export { Header };
