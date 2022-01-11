import { useCallback } from "react";

import { useSearchParams } from "react-router-dom";
import type { NavigateOptions } from "react-router-dom";

const useQueryParam = (
  key: string
): [string | undefined, (newQuery: any, options?: NavigateOptions) => void] => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key) || undefined;

  let setValue = useCallback(
    (newValue, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, newValue);
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [paramValue, setValue];
};

export { useQueryParam };
