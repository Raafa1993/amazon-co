import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/Auth";
import Routes from "./routes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from "./styles/global";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      <ToastContainer />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
