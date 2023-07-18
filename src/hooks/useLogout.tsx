import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AppContext } from "../context/AppContext";

function useLogout() {
  const { dispatch } = useContext(AuthContext);
  const { setRoadmapStatus } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });

    setRoadmapStatus([]);
  };
  return { logout };
}

export default useLogout;
