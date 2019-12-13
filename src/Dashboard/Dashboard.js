import React, { createContext, useState } from "react";
import Brand from "./Brand";
import Container from "./Container";
import GlobalStyle from "./GlobalStyle";
import Chart from "./Chart";
import { VirtualisedTable } from "./Table";
import DarkSwitch from "./DarkSwitch";

export const ThemeContext = createContext();

const Dashboard = () => {
  const themeState = useState('light');
  const [theme, setTheme] = themeState;
  const dark = theme === 'dark';
  return (
    <ThemeContext.Provider value={themeState}>
      <GlobalStyle dark={dark} />
      <Container>
        <Brand />
        <DarkSwitch />
        <Chart />
        <VirtualisedTable />
      </Container>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
