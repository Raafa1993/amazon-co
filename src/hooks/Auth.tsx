import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface User {
  id: string;
  nome: string;
  avatar: string;
  email: string;
  profiles: any;
}

interface AuthState {
  nome?: string;
  user?: User;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void;
  setTypeInt: any;
  typeInt: any;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
let user: User;

function AuthProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Acopy:token');
    const user = localStorage.getItem('@Acopy:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  })

  const [typeInt, setTypeInt] = useState('/login')

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post(`${typeInt}`, {
      email,
      senha,
    });

    const { nome, token } = response.data.result;

    localStorage.setItem('@Acopy:token', token);
    localStorage.setItem('@Acopy:user', JSON.stringify(nome));

    setData({ nome })
  }, [typeInt]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Acopy:token');
    localStorage.removeItem('@Acopy:user');

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, typeInt, setTypeInt }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }