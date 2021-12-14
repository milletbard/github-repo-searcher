import { FC } from "react";
import colors from "github-colors";
import { IThemeType } from "components/GlobalStyle";
import styled, { useTheme } from "styled-components";

const CircleSpan = styled.span`
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: #f1e05a;
`;

interface ILanguageIconProps {
  language: string;
}

const LanguageIcon: FC<ILanguageIconProps> = ({ language }) => {
  const theme: IThemeType = useTheme();
  const { color = theme.colorDark20 } = colors.get(language) ?? {};

  return <CircleSpan style={{ backgroundColor: color, marginRight: "4px" }} />;
};

export { LanguageIcon };
