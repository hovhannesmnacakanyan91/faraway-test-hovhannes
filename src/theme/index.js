import { createTheme } from '@mui/material/styles';
import { palette } from './palette';

const theme = createTheme({
  themeName: 'FARAWAY_THEME',
  palette,
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: palette.primary.main,
            color: palette.text[600],
            opacity: 0.5,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.text[600],
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: palette.text[400],
        },
      },
    },
  },
});

export default theme;
