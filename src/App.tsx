import React from "react";
import "@fontsource/inter";
import { RecoilRoot } from "recoil";
import CreateProject from "./projects/CreateProject";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/global";
import styled from "@emotion/styled";
import { CssVarsProvider } from "@mui/joy/styles";
import ProjectList from "./projects/ProjectList";
import CssBaseline from "@mui/joy/CssBaseline";

const AppWrapper = styled.main`
  display: flex;
  width: 500px;
  flex-direction: column;
  margin: 0 auto;
`;

function App() {
  return (
    <RecoilRoot>
      <CssVarsProvider defaultMode="system">
        <CssBaseline />
        <Global styles={globalStyles} />
        <AppWrapper className="App">
          <ProjectList />
          <CreateProject />
        </AppWrapper>
      </CssVarsProvider>
    </RecoilRoot>
  );
}

export default App;
