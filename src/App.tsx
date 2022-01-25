import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthContext";
import Routes from "./routes";

import { GlobalStyles } from "./styles/global";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
