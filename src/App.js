import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css';
import { theme } from './utils/theme';
import AnimatedRoutes from './components/AnimatedRoutes';

const StyledBox = styled(Box)`
  background-color: #0E0E18;
  color: #ffffff;
  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
    <StyledBox>
      <AnimatedRoutes/>
    </StyledBox>
    </Router>
    </ThemeProvider>
  );
}

export default App;
