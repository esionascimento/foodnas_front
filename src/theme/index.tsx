import { createTheme, ThemeProvider as TheProvider } from '@mui/material';
import React, { useMemo, useState } from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ThemeProvider({ children }: any) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  console.log('mode: ', mode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <TheProvider theme={theme}>{children}</TheProvider>
    </ColorModeContext.Provider>
  );
}
