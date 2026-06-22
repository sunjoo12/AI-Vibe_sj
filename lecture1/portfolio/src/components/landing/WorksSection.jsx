import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const WORKS = [
  {
    id: '01',
    title: 'Natural Cosmetics',
    subtitle: '이커머스 쇼핑몰',
    description:
      '내추럴 코스메틱 브랜드의 온라인 스토어. 상품 목록, 장바구니, 결제 플로우까지 구현한 풀페이지 이커머스.',
    tags: ['React', 'MUI', 'REST API'],
    year: '2025',
    color: '#F2EDE6',
  },
  {
    id: '02',
    title: 'Admin Dashboard',
    subtitle: '데이터 시각화 대시보드',
    description:
      '실시간 매출·사용자 데이터를 시각화한 어드민 페이지. 차트, 테이블, 필터 기능 포함.',
    tags: ['React', 'TypeScript', 'Recharts'],
    year: '2025',
    color: '#F9F7F4',
  },
  {
    id: '03',
    title: 'Weather App',
    subtitle: '날씨 웹앱',
    description:
      '위치 기반 7일 예보를 제공하는 날씨 앱. OpenWeather API 연동, 모바일 퍼스트 반응형 설계.',
    tags: ['React', 'Vite', 'Open API'],
    year: '2024',
    color: '#F2EDE6',
  },
  {
    id: '04',
    title: 'Dev Blog',
    subtitle: '개인 기술 블로그',
    description:
      '마크다운 기반 개인 블로그 플랫폼. 태그 필터, 검색, 다크모드 지원.',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    year: '2024',
    color: '#F9F7F4',
  },
  {
    id: '05',
    title: 'Food Delivery UI',
    subtitle: '배달 앱 UI',
    description:
      '음식 배달 서비스의 모바일 퍼스트 UI 프로토타입. Figma 디자인부터 React 구현까지.',
    tags: ['React', 'Figma', 'MUI'],
    year: '2024',
    color: '#F2EDE6',
  },
  {
    id: '06',
    title: 'Portfolio Site',
    subtitle: '포트폴리오 웹사이트',
    description:
      '현재 보고 계신 이 사이트. 미니멀리즘 디자인 시스템을 직접 구축하여 적용.',
    tags: ['React', 'MUI', 'Vite'],
    year: '2026',
    color: '#F9F7F4',
  },
];

/**
 * WorksSection 컴포넌트
 * 메인 페이지 섹션2 — 작업물 목차 카드 그리드
 *
 * Example usage:
 * <WorksSection />
 */
function WorksSection() {
  return (
    <Box
      component="section"
      id="works"
      sx={{
        width: '100%',
        backgroundColor: '#F9F7F4',
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography
            sx={{
              fontSize: '0.75rem',
              letterSpacing: '3px',
              color: '#AAAAAA',
              mb: 2,
            }}
          >
            SELECTED WORKS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: '-0.5px',
              fontFamily: "'Montserrat', 'Noto Sans KR', sans-serif",
            }}
          >
            Projects
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {WORKS.map((work) => (
            <Grid key={work.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: work.color,
                  borderRadius: '2px',
                  p: { xs: 5, md: 6 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: '1px solid transparent',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E0D8CC',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      color: '#C4A96A',
                    }}
                  >
                    {work.id}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.6875rem',
                      letterSpacing: '1px',
                      color: '#AAAAAA',
                    }}
                  >
                    {work.year}
                  </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#AAAAAA',
                      letterSpacing: '1px',
                      mb: 1,
                    }}
                  >
                    {work.subtitle}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.125rem', md: '1.25rem' },
                      fontWeight: 700,
                      color: '#1A1A1A',
                      fontFamily: "'Montserrat', 'Noto Sans KR', sans-serif",
                      mb: 2,
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      color: '#666666',
                      lineHeight: 1.7,
                    }}
                  >
                    {work.description}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {work.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: 'transparent',
                        border: '1px solid #E0D8CC',
                        color: '#6B6040',
                        fontSize: '0.6875rem',
                        letterSpacing: '0.5px',
                        height: 24,
                        borderRadius: '2px',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorksSection;
