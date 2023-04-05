// @ts-nocheck

import { useTheme, Box } from 'native-base';

export function UseTheme(): JSX.Element {
  const theme: any = useTheme();

  return <Box theme={theme}>
    {/* Do something with the theme */}
  </Box>;
}
