import Box from '@mui/material/Box';
import ProfileSection from '../components/landing/ProfileSection';
import WorksSection from '../components/landing/WorksSection';

/**
 * MainPage 컴포넌트
 * 포트폴리오 메인 페이지 — 프로필 섹션 + 작업물 섹션
 *
 * Example usage:
 * <MainPage />
 */
function MainPage() {
  return (
    <Box sx={{ width: '100%' }}>
      <ProfileSection />
      <WorksSection />
    </Box>
  );
}

export default MainPage;
