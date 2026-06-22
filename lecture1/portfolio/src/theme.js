import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B6040',
      light: '#8C7E55',
      dark: '#4A4329',
    },
    secondary: {
      main: '#F2EDE6',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F9F7F4',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      disabled: '#AAAAAA',
    },
    divider: '#E0D8CC',
    accent: {
      gold: '#C4A96A',
      green: '#3E5A3A',
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '1.375rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.6875rem',
      lineHeight: 1.6,
      color: '#AAAAAA',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0,0,0,0.08)',
    '0 4px 16px rgba(0,0,0,0.14)',
    '0 8px 32px rgba(0,0,0,0.18)',
    ...Array(21).fill('none'),
  ],
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#6B6040',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#4A4329',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontSize: '0.75rem',
          height: 28,
        },
      },
    },
  },
});

export default theme;
