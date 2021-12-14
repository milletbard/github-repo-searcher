import { FC } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const EmptyStateWrapper = styled.div`
  padding: 32px;
  text-align: center;
`;

const EmptyState: FC = () => (
  <EmptyStateWrapper>
    <GoSearch style={{ fontSize: "36px" }} />
    <h3>We couldn’t find any repositories matching 'repo name'</h3>
  </EmptyStateWrapper>
);

export { EmptyState };
