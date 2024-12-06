import React from "react";
import { useCookies } from "react-cookie";

interface User {
  name: string | null;
  email: string | null;
}

interface AuthContextType {
  token: string | undefined;
  user: User;
  login: (response: any) => void;
  logout: () => void;
}
interface AuthContextProps{
    children: React.ReactNode;
  
}
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

const AuthenticationProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = React.useState<User>({
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
  });
  const [cookies, setCookie, removeCookie] = useCookies(['_accessToken']);
  const [token, setToken] = React.useState(cookies._accessToken);

  const memoizedToken = React.useMemo(() => token, [token]);

  const login = (response: any) => {
    setToken(response.access_token);
    setCookie("_accessToken", response.access_token, { path: '/' });
    localStorage.setItem('name', response.user.name);
    localStorage.setItem('email', response.user.email);
    setUser(response.user);
  };

  const logout = () => {
    removeCookie("_accessToken");
    setUser({ name: null, email: null });
  };

  return (
    <AuthContext.Provider value={{ token: memoizedToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;

export const useAuthProvider = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthProvider must be used within an AuthenticationProvider');
  }
  return context;
};
