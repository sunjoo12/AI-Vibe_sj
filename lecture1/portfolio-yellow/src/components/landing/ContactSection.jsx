import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * ContactSection 컴포넌트
 * 연락처 안내 섹션
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: "'Fraunces', 'Noto Sans KR', serif",
            fontWeight: 900,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            color: 'text.primary',
            mb: 2,
          }}
        >
          함께 일하고 싶으신가요?
        </Typography>
        <Typography sx={{ fontSize: '0.9375rem', color: 'text.primary', mb: 4 }}>
          sunjoo1993@gmail.com
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="secondary"
            href="mailto:sunjoo1993@gmail.com"
            sx={{ px: 4 }}
          >
            이메일 보내기
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            sx={{
              px: 4,
              borderColor: 'text.primary',
              color: 'text.primary',
              '&:hover': { borderColor: 'text.primary', backgroundColor: 'rgba(74,52,24,0.08)' },
            }}
          >
            GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;
