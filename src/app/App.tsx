import { FC } from "react";
import { ThemeProvider, ThemeConsumer } from "styled-components";
import { Home } from "../pages";
import { GlobalStyle, darkTheme } from "components/GlobalStyle";

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ThemeConsumer>
          {(theme) => <GlobalStyle theme={theme} />}
        </ThemeConsumer>

        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
