import { createContext, useContext } from 'react';
import { AuthContextType } from '../@types';

const AuthContext = createContext({} as AuthContextType);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const signed = false;
  
  return (
    <AuthContext.Provider value={{
      signed
    }}>
      {children}
    </AuthContext.Provider>
  )
}
