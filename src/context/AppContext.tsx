import { createContext, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

interface IAppContext {
  sidebarIsOpened: boolean;
  toggleSidebarIsOpened: () => void;
  isMobile: boolean;
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
  roadmapStatus: { _id: string; name: string; status: string }[];
  setRoadmapStatus: React.Dispatch<
    React.SetStateAction<{ _id: string; name: string; status: string }[]>
  >;
  currentRoadmapPopup: string;
  setCurrentRoadmapPopup: (roadmapItem: string) => void;
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

  const [currentTheme, setCurrentTheme] = useState("dark");

  const [roadmapStatus, setRoadmapStatus] = useState<
    { _id: string; name: string; status: string }[]
  >([]);

  const [currentRoadmapPopup, setCurrentRoadmapPopup] = useState("");

  return (
    <AppContext.Provider
      value={{
        sidebarIsOpened,
        toggleSidebarIsOpened,
        isMobile,
        currentTheme,
        setCurrentTheme,
        roadmapStatus,
        setRoadmapStatus,
        currentRoadmapPopup,
        setCurrentRoadmapPopup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
