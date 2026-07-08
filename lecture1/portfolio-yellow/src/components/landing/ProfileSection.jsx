import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';

/**
 * ProfileSection 컴포넌트
 * 사진 + 소개 2컬럼 프로필 섹션 — 클로버 도형 배경 장식 포함
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
        backgroundColor: 'background.paper',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: { xs: 280, md: 340 },
                mx: 'auto',
              }}
            >
              <FilterVintageRoundedIcon
                sx={{ position: 'absolute', top: -20, left: -16, fontSize: 56, color: 'primary.light', opacity: 0.8 }}
              />
              <FilterVintageRoundedIcon
                sx={{ position: 'absolute', bottom: -12, right: -20, fontSize: 40, color: 'secondary.light', opacity: 0.8 }}
              />
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(74,52,24,0.16)',
                  background: (theme) =>
                    `radial-gradient(circle at 30% 20%, ${theme.palette.primary.light} 0%, ${theme.palette.background.default} 70%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Fraunces', 'Noto Sans KR', serif",
                    fontWeight: 900,
                    fontSize: { xs: '4rem', md: '5.5rem' },
                    color: 'primary.dark',
                    opacity: 0.35,
                    letterSpacing: '-2px',
                    userSelect: 'none',
                  }}
                >
                  SJ
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: "'Fraunces', 'Noto Sans KR', serif",
                fontWeight: 900,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                color: 'text.primary',
                mb: 2,
              }}
            >
              박선주 Park sunju
            </Typography>
            <Box
              sx={{
                display: 'inline-block',
                fontSize: '0.875rem',
                color: 'text.secondary',
                pb: 0.5,
                mb: 3,
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              1993.12.21
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '1rem' },
                lineHeight: 1.8,
                color: 'text.secondary',
                maxWidth: 520,
              }}
            >
              안녕하세요, 따뜻한 색감과 명확한 사용자 경험을 좋아하는 프론트엔드
              개발자 박선주입니다. React와 MUI를 중심으로 디자인 시스템을
              구축하고, 브랜드의 개성을 웹 화면에 담아내는 작업을 즐깁니다.
              아래에서 학력, 경력, 사용 툴과 작업물을 확인하실 수 있습니다.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProfileSection;
