import { createContext, useContext, useState } from 'react';
import { AuthContextType, UserSignInType, UserType } from '../@types';
import { ErrorHandler } from '../services/errors/ErrorHandler';
import { api } from '../services/apiClient';
import { setCookie } from 'nookies';
import { toast } from 'react-toastify';

const AuthContext = createContext({} as AuthContextType);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const signed = false;
  const [user, setUser] = useState<UserType>(null);

  const handleUserSignIn = async (data: UserSignInType) => {
    try {
      const sign_in_response = await api.post('/sign_in', data);

      setCookie(undefined, '@nextauth.token', sign_in_response.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });

      api.defaults.headers['Authorization'] = `Bearer ${sign_in_response.data.token}`;

      const profile_response = await api.get('/users/profile');

      setUser(profile_response.data);
      toast.success(`Welcome ${profile_response.data.name}`);
    } catch (error) {
      new ErrorHandler(error);
    }
  }

  return (
    <AuthContext.Provider value={{
      signed,
      handleUserSignIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}
