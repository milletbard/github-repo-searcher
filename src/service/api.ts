import { GITHUB_SEARCH_REPOSITORY_URL } from "../constants";

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  language: null | string;
  license: null | {
    name: string;
  };
  forks: number;
};

export type Data = {
  items: Repository[];
  total_count: number;
};

const fetchGithubSearchRepositories = async (
  page: number,
  searchValue: string
) => {
  const response = await fetch(
    `${GITHUB_SEARCH_REPOSITORY_URL}&page=${page}&q=${searchValue}`
  );

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("API rate limit exceeded");
    }

    throw new Error("An error occurred while fetching the data");
  }

  const data = await response.json();

  return data;
};

export { fetchGithubSearchRepositories };
