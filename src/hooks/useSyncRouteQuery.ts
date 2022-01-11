import { useEffect } from "react";
import { useQueryParam } from "hooks";

const useSyncRouteQuery = (value: string): void => {
  const [query, setQuery] = useQueryParam("q");

  useEffect(() => {
    if (query === undefined && value === "") {
      return;
    }

    if (query !== value) {
      setQuery(value);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, query]);
};

export { useSyncRouteQuery };
