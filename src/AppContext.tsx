import { createContext, useState } from "react";
import useMediaQuery from "./components/hooks/useMediaQuery";

interface IAppContext {
  sidebarIsOpened: boolean;
  toggleSidebarIsOpened: () => void;
  isMobile: boolean;
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

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <AppContext.Provider value={{ sidebarIsOpened, toggleSidebarIsOpened, isMobile }}>
      {children}
    </AppContext.Provider>
  );
};
