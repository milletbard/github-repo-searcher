import { FC } from "react";
import styled, { useTheme } from "styled-components";
import { GoStar, GoLinkExternal } from "react-icons/go";

import { IThemeType } from "components/GlobalStyle";
import { LanguageIcon } from "./LanguageIcon";

const Card = styled.div`
  background-color: ${(props) => props.theme.colorDark50};
  border-color: ${(props) => props.theme.colorDark20};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  padding: 16px;
  margin-top: 8px;
  min-height: 108px;
`;

const CardTitle = styled.div`
  color: ${(props) => props.theme.colorPrimary100};
  font-weight: 600;
  line-height: 1.25;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.div`
  color: ${(props) => props.theme.colorPrimary50};
  margin-top: 4px;
`;

const CardDetail = styled.p`
  color: ${(props) => props.theme.colorPrimary50};
  display: flex;
  align-item: center;
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 0;
`;

const CardDetailItem = styled.span`
  color: ${(props) => props.theme.colorPrimary50};
  display: inline-flex;
  font-size: 12px;
  align-items: center;
  margin-right: 16px;
`;

const RepositoryCard: FC = () => {
  const theme: IThemeType = useTheme();

  return (
    <Card theme={theme}>
      <div>
        <CardTitle>
          card title
          <GoLinkExternal style={{ marginLeft: "4px", cursor: "pointer" }} />
        </CardTitle>

        <CardDescription theme={theme}>card description</CardDescription>

        <CardDetail theme={theme}>
          <CardDetailItem>
            <LanguageIcon language="JavaScript" />
            JavaScript
          </CardDetailItem>

          <CardDetailItem>
            <GoStar style={{ marginRight: "4px" }} />
            5.6k
          </CardDetailItem>

          <CardDetailItem>Updated Dec 13</CardDetailItem>
        </CardDetail>
      </div>
    </Card>
  );
};

export { RepositoryCard, Card };
