import { createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => {
  const context = useContext(LenisContext);
  return context.lenis;
};

interface LenisProviderProps {
  children: ReactNode;
  lenis: Lenis | null;
}

export function LenisProvider({ children, lenis }: LenisProviderProps) {
  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}

