import { useRef, useEffect, MutableRefObject } from "react";

const useHasMounted = (): MutableRefObject<boolean> => {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;

    return () => {
      hasMounted.current = false;
    };
  }, []);

  return hasMounted;
};

export { useHasMounted };
