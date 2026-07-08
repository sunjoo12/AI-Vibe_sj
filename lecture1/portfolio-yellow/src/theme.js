import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'media',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#D4A017',
          light: '#F0DFA0',
          dark: '#B8860B',
          contrastText: '#4A3418',
        },
        secondary: {
          main: '#E8963C',
          light: '#F5E27A',
          dark: '#C97A1E',
          contrastText: '#4A3418',
        },
        background: {
          default: '#FBF3DE',
          paper: '#FFFDF7',
        },
        text: {
          primary: '#4A3418',
          secondary: '#6B4E24',
          disabled: '#8A6F42',
        },
        divider: '#EAD9A0',
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#D4A017',
          light: '#F0DFA0',
          dark: '#B8860B',
          contrastText: '#2A2210',
        },
        secondary: {
          main: '#F0A550',
          light: '#F5E27A',
          dark: '#E8963C',
          contrastText: '#2A2210',
        },
        background: {
          default: '#2A2210',
          paper: '#332A18',
        },
        text: {
          primary: '#FBF3DE',
          secondary: '#E0D4B0',
          disabled: '#A89468',
        },
        divider: '#4A3C1E',
      },
    },
  },
  typography: {
    fontFamily: "'Be Vietnam Pro', 'Noto Sans KR', sans-serif",
    h1: {
      fontFamily: "'Fraunces', 'Noto Sans KR', serif",
      fontSize: '2.75rem',
      fontWeight: 900,
      lineHeight: 1.0,
      letterSpacing: '-1px',
    },
    h2: {
      fontFamily: "'Fraunces', 'Noto Sans KR', serif",
      fontSize: '2rem',
      fontWeight: 900,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.4,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
