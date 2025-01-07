import * as React from 'react';
import {
  Box,
  Typography,
  CssBaseline,
  Paper,
} from '@mui/material';
import AppTheme from './theme/AppTheme';
import ColorModeSelect from './theme/ColorModeSelect';
import AnalysisLeftPanel from './components/AnalysisLeftPanel'; // Import the left panel component

const AnalysisPage = (props) => {
// eslint-disable-next-line no-unused-vars
const [resumeData, setResumeData] = React.useState({
    matchRate: 'Low',
    matchPercentage: 30,
    issues: {
      searchability: 3,
      hardSkills: 2,
      softSkills: 1,
      recruiterTips: 1,
      formatting: 1,
    },
  });
  

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        {/* Left Panel */}
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
        <AnalysisLeftPanel resumeData={resumeData} />
        {/* Add content for the main right section here */}
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 4,
            mt: '64px', // Space for AppBar
          }}
        >
          {/* Page Header */}
          <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
            Results Display
          </Typography>

          {/* Placeholder for future content */}
          <Paper
            elevation={3}
            sx={{
              p: 4,
              maxWidth: '800px',
              width: '100%',
              textAlign: 'center',
              bgcolor: 'background.paper',
              color: 'text.secondary',
            }}
          >
            <Typography variant="body1">
              Content will be added here in the future.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default AnalysisPage;
