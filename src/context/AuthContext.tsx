import { createContext, useReducer } from "react";

interface IAuthContext {
  user: string | null;
  dispatch: React.Dispatch<Action>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

type Action = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const authReducer = (state: string | null, action: Action) => {
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

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
