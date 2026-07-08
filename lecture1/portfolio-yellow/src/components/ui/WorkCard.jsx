import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

/**
 * WorkCard 컴포넌트
 * 작업물 썸네일 카드 — 클릭 시 실제 사이트로 새 탭 이동
 *
 * Props:
 * @param {string} title - 프로젝트 제목 [Required]
 * @param {string} description - 프로젝트 설명 [Required]
 * @param {string} thumbnail - 썸네일 이미지 경로 [Required]
 * @param {string} url - 연결할 사이트 URL [Required]
 *
 * Example usage:
 * <WorkCard title="SJ File_Hub" description="파일 업로드/공유 플랫폼" thumbnail={img} url="https://..." />
 */
function WorkCard({ title, description, thumbnail, url }) {
  return (
    <Box
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 20px rgba(74,52,24,0.18)',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          component="img"
          src={thumbnail}
          alt={`${title} 첫 화면 스크린샷`}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </Box>
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography sx={{ fontSize: '1.125rem', fontWeight: 700, color: 'text.primary' }}>
            {title}
          </Typography>
          <ArrowOutwardRoundedIcon sx={{ fontSize: 20, color: 'secondary.dark' }} />
        </Box>
        <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary', lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default WorkCard;
