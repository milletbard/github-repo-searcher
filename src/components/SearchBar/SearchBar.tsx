import { FC } from "react";
import { IThemeType } from "components/GlobalStyle";

import styled, { useTheme } from "styled-components";

const SearchBarWrapper = styled.label`
  display: flex;
  min-height: 28px;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colorDark100};
  color: inherit;
  font-size: inherit;
  border: 1px solid;
  border-color: ${(props) => props.theme.colorDark20};
  box-shadow: none;
  border-radius: 6px;
  outline: none;
  padding: 5px 12px;

  &:focus {
    border-color: ${(props) => props.theme.colorBlue20};
  }
`;

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  const theme: IThemeType = useTheme();

  return (
    <SearchBarWrapper>
      <SearchInput
        value={value}
        onChange={onChange}
        theme={theme}
        placeholder="Find a repository..."
      ></SearchInput>
    </SearchBarWrapper>
  );
};

export { SearchBar };
