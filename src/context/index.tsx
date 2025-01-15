"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserData } from "@/src/types";

interface AppContextTypes {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AppContext = createContext<AppContextTypes>({} as AppContextTypes);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
