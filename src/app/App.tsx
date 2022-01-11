import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
