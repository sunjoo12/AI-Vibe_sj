import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const SKILLS = [
  'React', 'TypeScript', 'Next.js', 'MUI', 'Figma',
  'Node.js', 'Git', 'Vite', 'REST API', 'Responsive Design',
];

/**
 * ProfileSection 컴포넌트
 * 메인 페이지 섹션1 — 가상 프로필 (히어로 영역)
 *
 * Example usage:
 * <ProfileSection />
 */
function ProfileSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                letterSpacing: '3px',
                color: '#AAAAAA',
                mb: 3,
                fontWeight: 400,
              }}
            >
              FRONTEND DEVELOPER
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                fontWeight: 700,
                color: '#1A1A1A',
                letterSpacing: '-1px',
                lineHeight: 1.15,
                mb: 4,
                fontFamily: "'Montserrat', 'Noto Sans KR', sans-serif",
              }}
            >
              Kim<br />Ji-an
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.9375rem', md: '1rem' },
                color: '#666666',
                lineHeight: 1.8,
                maxWidth: 480,
                mb: 6,
              }}
            >
              React와 MUI를 기반으로 섬세하고 직관적인 웹 경험을 만드는
              프론트엔드 개발자입니다. 사용자의 시선에서 생각하고, 디자인과
              기술의 경계를 탐색하는 것을 좋아합니다.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 6 }}>
              {SKILLS.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    borderColor: '#E0D8CC',
                    color: '#666666',
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px',
                    '&:hover': {
                      borderColor: '#6B6040',
                      color: '#6B6040',
                      backgroundColor: 'transparent',
                    },
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                href="#works"
                sx={{
                  backgroundColor: '#6B6040',
                  color: '#FFFFFF',
                  px: 5,
                  py: 1.5,
                  fontSize: '0.8125rem',
                  letterSpacing: '1.5px',
                  borderRadius: '2px',
                  '&:hover': { backgroundColor: '#4A4329' },
                }}
              >
                WORKS
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#E0D8CC',
                  color: '#6B6040',
                  px: 5,
                  py: 1.5,
                  fontSize: '0.8125rem',
                  letterSpacing: '1.5px',
                  borderRadius: '2px',
                  '&:hover': {
                    borderColor: '#6B6040',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                CONTACT
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                maxWidth: { xs: 280, md: 380 },
                mx: 'auto',
                backgroundColor: '#F2EDE6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 30% 70%, #E0D8CC 0%, #F2EDE6 60%, #F9F7F4 100%)',
                }}
              />
              <Typography
                sx={{
                  position: 'relative',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: { xs: '4rem', md: '5.5rem' },
                  fontWeight: 900,
                  color: '#6B6040',
                  opacity: 0.18,
                  letterSpacing: '-2px',
                  userSelect: 'none',
                }}
              >
                JK
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProfileSection;
