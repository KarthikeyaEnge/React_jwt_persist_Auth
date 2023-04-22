import { createContext, useState } from "react";

const AuthContext = createContext({});

const Authprovider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default Authprovider;
