import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import WorkCard from '../ui/WorkCard';
import fileHubThumb from '../../assets/works/file-hub.png';
import myCommunityThumb from '../../assets/works/my-community.png';

const WORKS = [
  {
    title: 'SJ File_Hub',
    description: '파일을 업로드하고 팀원들과 안전하게 공유하는 Supabase 기반 파일 저장 서비스',
    thumbnail: fileHubThumb,
    url: 'https://sunjoo12.github.io/file-hub/',
  },
  {
    title: 'Blurflower',
    description: '소소한 일상과 감정을 나누는 감성 갤러리 커뮤니티',
    thumbnail: myCommunityThumb,
    url: 'https://sunjoo12.github.io/my-community/',
  },
];

/**
 * WorksSection 컴포넌트
 * 실제 작업물 목록 섹션 — 썸네일 클릭 시 각 사이트로 연결
 *
 * Example usage:
 * <WorksSection />
 */
function WorksSection() {
  return (
    <Box component="section" sx={{ width: '100%', backgroundColor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 4 }}>
          작업물
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {WORKS.map((work) => (
            <Grid key={work.title} size={{ xs: 12, md: 6 }}>
              <WorkCard
                title={work.title}
                description={work.description}
                thumbnail={work.thumbnail}
                url={work.url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorksSection;
