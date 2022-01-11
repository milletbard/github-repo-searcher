import { FC } from "react";

import styled, { useTheme } from "styled-components";
import { GoStar, GoLinkExternal } from "react-icons/go";
import { Repository } from "types";

import { IThemeType } from "components/GlobalStyle";
import { LanguageIcon } from "./LanguageIcon";

const numberFormatter = new Intl.NumberFormat("en", { notation: "compact" });

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

const CardTitle = styled.a`
  color: ${(props) => props.theme.colorBlue50};
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const CardDescription = styled.div`
  color: ${(props) => props.theme.colorPrimary50};
  margin-top: 4px;
`;

const CardTopicTag = styled.a`
  white-space: nowrap;
  display: inline-block;
  padding: 0 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22x;
  margin: 4px 2px 4px 2px;
  border-radius: 2em;
  line-height: 22px;
  color: ${(props) => props.theme.colorBlue50};
  background-color: rgba(56, 139, 253, 0.15);

  &:hover {
    color: ${(props) => props.theme.colorPrimary100};
    background-color: rgba(56, 139, 253, 1);
  }
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

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => {
  const theme: IThemeType = useTheme();

  return (
    <Card theme={theme}>
      <div>
        <CardTitle href={repository.html_url} target="_blank">
          {repository.full_name}
          <GoLinkExternal style={{ marginLeft: "4px", cursor: "pointer" }} />
        </CardTitle>

        <CardDescription theme={theme}>
          {repository.description}
        </CardDescription>

        <CardDescription theme={theme}>
          {repository.topics.map((tag) => (
            <CardTopicTag key={tag} theme={theme}>
              {tag}
            </CardTopicTag>
          ))}
        </CardDescription>

        <CardDetail theme={theme}>
          <CardDetailItem>
            <GoStar style={{ marginRight: "4px" }} />

            {numberFormatter.format(repository.stargazers_count)}
          </CardDetailItem>

          <CardDetailItem>
            <LanguageIcon language={repository.language} />
            {repository.language}
          </CardDetailItem>

          {repository.license?.name && (
            <CardDetailItem> {repository.license.name}</CardDetailItem>
          )}
        </CardDetail>
      </div>
    </Card>
  );
};

export { RepositoryCard, Card };
