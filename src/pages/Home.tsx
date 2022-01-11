import { FC, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  useSyncRouteQuery,
  useQueryParam,
  useGithubRepositoryFetcher,
} from "hooks";

import { Header, Main } from "components/Layout";
import { RepositoryList } from "components/RepositoryList";
import { EmptyState } from "components/EmptyState";
import { SearchBar } from "components/SearchBar";
import { Skeletons } from "components/Skeleton";
import { RevalidateButton } from "components/RevalidateButton";

const Home: FC = () => {
  const [query] = useQueryParam("q");
  const [persistQueryValue] = useState(query);

  const [value, setValue] = useState(persistQueryValue ?? "");
  const [searchValue] = useDebounce(value, 500);

  const {
    repositories,
    error,
    isLoadingMore,
    isEmpty,
    isRefreshing,
    loadMore,
    revalidate,
  } = useGithubRepositoryFetcher(searchValue);

  useSyncRouteQuery(searchValue);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue(event.target.value);
  };

  const handleLoadMore = () => {
    loadMore();
  };

  return (
    <>
      <Header>
        <SearchBar value={value} onChange={handleInputChange} />
      </Header>

      <Main>
        <h2 style={{ fontWeight: "400", fontSize: "16px" }}>
          Repository Searcher
        </h2>

        {repositories.length !== 0 && (
          <RepositoryList
            repositories={repositories}
            onLoadMore={handleLoadMore}
          />
        )}

        {isEmpty && searchValue && !isLoadingMore && !error && (
          <EmptyState searchValue={searchValue} />
        )}

        {isLoadingMore && searchValue && !error && <Skeletons />}

        {error && (
          <RevalidateButton
            error={error}
            isRefreshing={isRefreshing}
            onClick={revalidate}
          />
        )}
      </Main>
    </>
  );
};

export { Home };
