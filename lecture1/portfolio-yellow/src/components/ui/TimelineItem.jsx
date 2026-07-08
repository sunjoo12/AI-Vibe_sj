import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * TimelineItem 컴포넌트
 * 타임라인 리스트의 단일 항목 — 점 + 세로 연결선
 *
 * Props:
 * @param {string} label - 항목 제목 [Required]
 * @param {string} period - 기간 텍스트 [Required]
 * @param {string} role - 부가 역할 설명 [Optional]
 * @param {boolean} isLast - 마지막 항목 여부(연결선 숨김) [Optional, 기본값: false]
 *
 * Example usage:
 * <TimelineItem label="노란지붕 스튜디오" role="프론트엔드 개발자" period="2024.03 - 현재" />
 */
function TimelineItem({ label, period, role, isLast = false }) {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 0.75 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'secondary.main', flexShrink: 0 }} />
        {!isLast && <Box sx={{ width: '1px', flexGrow: 1, backgroundColor: 'divider', mt: 0.5 }} />}
      </Box>
      <Box sx={{ pb: 3 }}>
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary' }}>{label}</Typography>
        {role && (
          <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary', mt: 0.25 }}>{role}</Typography>
        )}
        <Typography sx={{ fontSize: '0.75rem', color: 'text.disabled', mt: 0.5 }}>{period}</Typography>
      </Box>
    </Box>
  );
}

export default TimelineItem;
