import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ToolBadge 컴포넌트
 * 40x40 라운드 사각 툴 뱃지
 *
 * Props:
 * @param {string} label - 뱃지 내부 텍스트 [Required]
 *
 * Example usage:
 * <ToolBadge label="Ai" />
 */
function ToolBadge({ label }) {
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'primary.main',
        backgroundColor: 'background.paper',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: 'primary.dark' }}>{label}</Typography>
    </Box>
  );
}

export default ToolBadge;
