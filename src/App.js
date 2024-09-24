import { Toaster } from "react-hot-toast";

import Question from "./components/Question";
import Settings from "./components/Settings";
import Option from "./components/Option";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

function App() {
  return (
    <StyledApp>
      <Settings />
      <Question />
      <Option />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
    </StyledApp>
  );
}

export default App;
