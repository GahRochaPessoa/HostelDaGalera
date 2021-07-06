import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
