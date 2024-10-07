"use client";

import { createContext, useContext, useMemo } from "react";
import { AuthState } from "@/handlers/types/auth";

// eslint-disable-next-line import/extensions
import elfaConfigData from "@/handlers/constants/mock/elfaConfigData.json";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextReturnType = {
  authState: AuthState;
  elfaConfig: any;
};

export const AuthContext = createContext<AuthContextReturnType>(
  {} as AuthContextReturnType,
);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authState = AuthState.AUTHENTICATED;

  const contextValue = useMemo(
    () => ({
      authState,
      elfaConfig: elfaConfigData,
    }),
    [authState, elfaConfigData],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
