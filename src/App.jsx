import "./App.css";
import Home from "./pages/Index";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "@bramastyapp",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
