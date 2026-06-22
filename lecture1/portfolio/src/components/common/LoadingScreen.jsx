import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * LoadingScreen 컴포넌트
 *
 * Props:
 * @param {function} onFinish - 로딩 완료 시 호출할 콜백 [Required]
 *
 * Example usage:
 * <LoadingScreen onFinish={() => setLoading(false)} />
 */
function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setFadeOut(true), 300);
      setTimeout(() => onFinish(), 900);
    }
  }, [progress, onFinish]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#F9F7F4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
        gap: 6,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 900,
            letterSpacing: '4px',
            color: '#6B6040',
            mb: 1,
          }}
        >
          JI-AN KIM
        </Typography>
        <Typography
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '3px',
            color: '#AAAAAA',
            fontWeight: 400,
          }}
        >
          PORTFOLIO
        </Typography>
      </Box>

      <Box sx={{ width: { xs: 120, md: 160 }, position: 'relative' }}>
        <Box
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E0D8CC',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '1px',
            width: `${progress}%`,
            backgroundColor: '#C4A96A',
            transition: 'width 0.05s linear',
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: '0.6875rem',
          letterSpacing: '2px',
          color: '#AAAAAA',
        }}
      >
        {progress}%
      </Typography>
    </Box>
  );
}

export default LoadingScreen;
