import { FC } from "react";

import { Header, Main } from "components/Layout";
import { RepositoryList } from "components/RepositoryList";
import { EmptyState } from "components/EmptyState";
import { SearchBar } from "components/SearchBar";
import { Skeleton } from "components/Skeleton";
import { RevalidateButton } from "components/RevalidateButton";

const Home: FC = () => {
  return (
    <>
      <Header>
        <SearchBar />
      </Header>

      <Main>
        <h2 style={{ fontWeight: "400", fontSize: "16px" }}>
          Repository Searcher
        </h2>

        <RepositoryList />

        <EmptyState />

        <Skeleton />

        <RevalidateButton />
      </Main>
    </>
  );
};

export { Home };
