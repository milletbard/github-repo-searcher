import useSWRInfinite from "swr/infinite";
import { PER_PAGE } from "../constants";
import { Repository, Data } from "types";

import { fetchGithubSearchRepositories } from "service/api";

const useGithubRepositoryFetcher = (searchValue: string) => {
  const {
    data: originalData,
    error: originalError,
    size,
    setSize,
    isValidating,
    mutate,
  } = useSWRInfinite<Data>((index) => {
    if (!searchValue) {
      return null;
    }

    return [index + 1, searchValue];
  }, fetchGithubSearchRepositories);

  const error = originalError;

  const data: Data[] = originalData?.length ? originalData : [];

  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === "undefined";

  const lastItems: Repository[] = data[data.length - 1]?.items ?? [];

  const isEmpty = data[0]?.items?.length === 0;

  const isRefreshing =
    isValidating && lastItems && lastItems.length === PER_PAGE;

  // reduce the data items
  const repositories =
    data?.reduce<Repository[]>(
      (acc, curr) => ("items" in curr ? [...acc, ...curr.items] : acc),
      []
    ) ?? [];

  const loadMore = () => {
    setSize((prev) => prev + 1);
  };

  const revalidate = () => mutate();

  return {
    repositories,
    error,
    isLoadingMore,
    isEmpty,
    isRefreshing,
    loadMore,
    revalidate,
  };
};

export { useGithubRepositoryFetcher };
