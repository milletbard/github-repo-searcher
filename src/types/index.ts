export type Repository = {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  topics: string[];
  watchers: number;
};

export type Data = {
  total_count: string;
  incomplete_results: boolean;
  items: Repository[];
};
