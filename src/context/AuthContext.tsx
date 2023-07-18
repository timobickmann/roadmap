import { createContext, useReducer, useEffect } from "react";

interface IUser {
  email: string;
  token: string;
}

interface IAuthContext {
  user: IUser | null;
  dispatch: React.Dispatch<Action>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

type Action = { type: "LOGIN"; payload: IUser } | { type: "LOGOUT" };

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const authReducer = (state: IUser | null, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.length > 0) {
      dispatch({
        type: "LOGIN",
        payload: storedUser,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
