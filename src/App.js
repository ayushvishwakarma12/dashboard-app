import Context from "./context/Context";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Outlet from "./outlet/outlet";

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <Context.Provider value={{ sidebarActive, setSidebarActive }}>
      <Context.Consumer>
        {() => {
          return (
            <div className="flex">
              <Sidebar />
              <Outlet />
            </div>
          );
        }}
      </Context.Consumer>
    </Context.Provider>
  );
};

export default App;
