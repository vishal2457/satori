import { createContext, useContext } from 'react';

interface AppShellContextValue {
  fixed: boolean;
}

const AppShellContext = createContext<AppShellContextValue>({
  fixed: false,
});

export const AppShellProvider = AppShellContext.Provider;

export function useAppShellContext() {
  return useContext(AppShellContext);
}