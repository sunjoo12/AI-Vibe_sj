import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ToolBadge from '../ui/ToolBadge';

const TOOLS = ['React', 'Vite', 'MUI', 'Figma', 'Ps', 'Ai'];

/**
 * ToolsSection 컴포넌트
 * 사용 툴 뱃지 목록 섹션
 *
 * Example usage:
 * <ToolsSection />
 */
function ToolsSection() {
  return (
    <Box component="section" sx={{ width: '100%', backgroundColor: 'background.paper', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 3 }}>
          사용 툴
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {TOOLS.map((tool) => (
            <ToolBadge key={tool} label={tool} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ToolsSection;
