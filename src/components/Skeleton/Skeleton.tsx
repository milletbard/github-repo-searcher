import { FC } from "react";
import { useTheme } from "styled-components";
import ContentLoader from "react-content-loader";
import { IThemeType } from "components/GlobalStyle";
import { Card } from "components/RepositoryList";

const Skeleton: FC = () => {
  const theme: IThemeType = useTheme();

  return (
    <Card theme={theme}>
      <ContentLoader
        backgroundColor={theme.colorDark50}
        foregroundColor={theme.colorDark20}
        speed={2}
        height={80}
      >
        <rect x="0" y="16" rx="3" ry="3" width="160" height="8" />
        <rect x="0" y="32" rx="3" ry="3" width="180" height="8" />
        <rect x="0" y="48" rx="3" ry="3" width="380" height="8" />
        <rect x="0" y="64" rx="3" ry="3" width="420" height="8" />
      </ContentLoader>
    </Card>
  );
};

export { Skeleton };
