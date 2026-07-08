import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TimelineItem from '../ui/TimelineItem';

const EDUCATION = [
  { label: 'SBS 아카데미', period: '2025 - 2026' },
  { label: '대림대학교 경영학과', period: '2014 - 2017' },
];

const CAREER = [
  { label: '노란지붕 스튜디오', role: '웹 디자이너', period: '2024.03 - 현재' },
  { label: '테라스 커넥트', role: 'UI/UX 디자이너', period: '2022.06 - 2024.02' },
  { label: '프리랜서', role: '개인·소규모 브랜드 웹디자인 작업', period: '2021.01 - 2022.05' },
];

/**
 * TimelineSection 컴포넌트
 * 학력 / 경력 2컬럼 타임라인 섹션
 *
 * Example usage:
 * <TimelineSection />
 */
function TimelineSection() {
  return (
    <Box component="section" sx={{ width: '100%', backgroundColor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 3 }}>
              학력
            </Typography>
            {EDUCATION.map((item, index) => (
              <TimelineItem key={item.label} label={item.label} period={item.period} isLast={index === EDUCATION.length - 1} />
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 3 }}>
              경력
            </Typography>
            {CAREER.map((item, index) => (
              <TimelineItem
                key={item.label}
                label={item.label}
                role={item.role}
                period={item.period}
                isLast={index === CAREER.length - 1}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TimelineSection;
