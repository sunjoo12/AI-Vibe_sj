import Box from '@mui/material/Box';
import HeroSection from '../components/landing/HeroSection';
import ProfileSection from '../components/landing/ProfileSection';
import TimelineSection from '../components/landing/TimelineSection';
import ToolsSection from '../components/landing/ToolsSection';
import WorksSection from '../components/landing/WorksSection';
import ContactSection from '../components/landing/ContactSection';

/**
 * MainPage 컴포넌트
 * 포트폴리오 메인 페이지 — 히어로, 프로필, 타임라인, 툴, 작업물, 연락처 섹션 조합
 *
 * Example usage:
 * <MainPage />
 */
function MainPage() {
  return (
    <Box sx={{ width: '100%' }}>
      <HeroSection />
      <ProfileSection />
      <TimelineSection />
      <ToolsSection />
      <WorksSection />
      <ContactSection />
    </Box>
  );
}

export default MainPage;
