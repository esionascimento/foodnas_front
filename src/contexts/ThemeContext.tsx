import { createContext, ReactNode } from 'react';

const initialState = {
  onToggleMode: () => {},
};

const ThemeContext = createContext(initialState);

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: ReactNode;
  defaultSettings: any;
};

function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
  const toggleColorMode = () => {
    console.log('a');
  };

  return (
    <ThemeContext.Provider
      value={{
        onToggleMode: toggleColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { SettingsProvider, ThemeContext };
