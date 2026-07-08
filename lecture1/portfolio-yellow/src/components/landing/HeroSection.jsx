import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';

/**
 * HeroSection 컴포넌트
 * 포트폴리오 커버 히어로 섹션 — 대형 타이포 + 데코 요소 + 옐로우 그라디언트 배경
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: { xs: '80vh', md: '100vh' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light} 40%, ${theme.palette.primary.main} 100%)`,
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography sx={{ fontSize: { xs: '0.75rem', md: '1rem' }, fontWeight: 700, letterSpacing: '1.5px', color: 'text.primary' }}>
            Park sunju
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.75rem', md: '1rem' }, fontWeight: 700, letterSpacing: '1.5px', color: 'text.secondary' }}>
            2025 - 2026
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.75rem', md: '1rem' }, fontWeight: 700, letterSpacing: '1.5px', color: 'text.primary' }}>
            WEB DESIGNER
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <FilterVintageRoundedIcon
            sx={{
              position: 'absolute',
              top: { xs: '4%', md: '10%' },
              right: { xs: '4%', md: '18%' },
              fontSize: { xs: 40, md: 64 },
              color: 'secondary.light',
              opacity: 0.9,
              transform: 'rotate(12deg)',
            }}
          />
          <FilterVintageRoundedIcon
            sx={{
              position: 'absolute',
              top: { xs: '18%', md: '24%' },
              right: { xs: '18%', md: '26%' },
              fontSize: { xs: 24, md: 36 },
              color: 'secondary.main',
              opacity: 0.7,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: { xs: 'none', md: 'block' },
              opacity: 0.5,
              pointerEvents: 'none',
              background:
                'radial-gradient(ellipse at 30% 50%, rgba(232,150,60,0.18) 0%, rgba(251,243,222,0.05) 60%, transparent 100%)',
            }}
          />

          <Typography
            component="h1"
            sx={{
              fontFamily: "'Fraunces', 'Noto Sans KR', serif",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: { xs: '-1px', md: '-3px' },
              color: 'text.primary',
              fontSize: { xs: '3rem', sm: '4.5rem', md: '7rem' },
              textAlign: 'center',
            }}
          >
            port
            <br />
            folio.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
