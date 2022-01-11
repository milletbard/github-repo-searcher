import { FC } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const EmptyStateWrapper = styled.div`
  padding: 32px;
  text-align: center;
`;

interface EmptyStateProps {
  searchValue: string;
}

const EmptyState: FC<EmptyStateProps> = ({ searchValue }) => (
  <EmptyStateWrapper>
    <GoSearch style={{ fontSize: "36px" }} />
    <h3>We couldn’t find any repositories matching '{searchValue}'</h3>
  </EmptyStateWrapper>
);

export { EmptyState };
