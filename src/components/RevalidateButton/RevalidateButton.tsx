import { FC, MouseEventHandler, useState, useRef, useEffect } from "react";

import styled, { useTheme } from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colorPrimary50};
  background: ${(props) => props.theme.colorDark50};
  border: 1px solid ${(props) => props.theme.colorDark20};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colorDark20};
  }
`;

interface RevalidateButtonProps {
  error: Error;
  isRefreshing: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RevalidateButton: FC<RevalidateButtonProps> = ({
  error,
  isRefreshing,
  onClick,
}) => {
  const theme = useTheme();
  const timerRef = useRef<number | null>();
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimer(5);

    timerRef.current = window.setInterval(() => {
      setTimer((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);
  };

  useEffect(() => {
    if (timerRef.current && timer === 0) {
      clearInterval(timerRef.current);
    }
  }, [timer]);

  return (
    <Button
      disabled={timer !== 0}
      theme={theme}
      onClick={(event) => {
        startTimer();
        onClick(event);
      }}
    >
      {error.message},{" "}
      {timer === 0 && !isRefreshing
        ? `click here to try again.`
        : `click here after ${timer} seconds.`}
    </Button>
  );
};

export { RevalidateButton };
