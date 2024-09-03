import "./App.css";
import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "./context";
import { router } from "./routers/Index";

function App() {
  const user = {
    username: "@bramastyapp",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
