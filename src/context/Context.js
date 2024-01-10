import React from "react";

const Context = React.createContext({
  sidebarActive: false,
  setSidebarActive: () => {},
});

export default Context;
