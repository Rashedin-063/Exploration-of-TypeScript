import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark'

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme? : Theme
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)


export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {

  const [theme, setTheme] = useState<Theme>(defaultTheme)

    return (
  <ThemeProviderContext.Provider value={{theme, setTheme}}>
    {children}
  </ThemeProviderContext.Provider>
  )
}


export const useTheme = () => {



  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
    
    return context
}