import { createContext, useState } from "react";

interface IAppContext {
  sidebarIsOpened: boolean;
  toggleSidebarIsOpened: () => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
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
