//@ts-nocheck

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
  function toggleSidebarIsOpened() {
    setSidebarIsOpened(!sidebarIsOpened);
  }

  return (
    <AppContext.Provider value={{ sidebarIsOpened, toggleSidebarIsOpened }}>
      {children}
    </AppContext.Provider>
  );
};
