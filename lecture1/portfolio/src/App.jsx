import { useState } from 'react';
import Box from '@mui/material/Box';
import LoadingScreen from './components/common/LoadingScreen';
import MainPage from './pages/MainPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      {!isLoading && <MainPage />}
    </Box>
  );
}

export default App;
