"use client";

import { createContext } from "react";
import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";

type SnackbarProviderProps = {
  children: React.ReactNode;
};

export const SnackbarContext = createContext(null);

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  return (
    <NotistackSnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {children}
    </NotistackSnackbarProvider>
  );
};

export default SnackbarProvider;
