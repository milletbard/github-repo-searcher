import { FC } from "react";
import { Repository } from "types";
import { useInViewEffect } from "react-hook-inview";

import { RepositoryCard } from "./RepositoryCard";

interface RepositoryListProps {
  repositories: Repository[];
  onLoadMore: () => void;
}

const RepositoryList: FC<RepositoryListProps> = ({
  repositories,
  onLoadMore,
}) => {
  const ref = useInViewEffect(
    ([entry]) => {
      if (entry.isIntersecting) {
        onLoadMore();
      }
    },
    { rootMargin: "10%", threshold: 0 }
  );

  return (
    <div>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}

      <div ref={ref} />
    </div>
  );
};

export { RepositoryList };
