import React from 'react';
import { Box, Typography, Button, Divider, LinearProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import HandymanIcon from '@mui/icons-material/Handyman';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import KeywordsIcon from '@mui/icons-material/EmojiObjects';

const AnalysisLeftPanel = ({ resumeData }) => {
  // Get the color based on the match percentage
  const getMatchRateColor = (percentage) => {
    if (percentage >= 75) return 'green';
    if (percentage >= 50) return 'yellow';
    return 'red';
  };

  const matchRateColor = getMatchRateColor(resumeData.matchPercentage);

  return (
    <Box
      sx={{
        width: '300px',
        minWidth: '250px',
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        position: 'sticky',
        top: '80px',
        left: 0,
        zIndex: 1000,
        marginRight: '16px',
        marginLeft: '20px'
      }}
    >
      {/* Match Rate Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Match Rate
        </Typography>
        <Box
          sx={{
            width: '150px',
            height: '150px',
            mx: 'auto',
            borderRadius: '50%',
            border: `10px solid ${matchRateColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: matchRateColor,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {resumeData.matchPercentage}% <br />
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                fontSize: '0.8rem',
                fontWeight: 'normal',
              }}
            >
              {resumeData.matchRate}
            </Typography>
          </Typography>
        </Box>
      </Box>

      {/* Upload and Edit Buttons */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{ mb: 1, width: '100%' }}
        >
          Upload & Rescan
        </Button>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{ width: '100%' }}
        >
          Power Edit
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Progress Bars */}
      <Box>
        {[ 
          { label: 'Searchability', value: 70, icon: <SearchIcon />, issues: resumeData.issues.searchability },
          { label: 'Hard Skills', value: 50, icon: <HandymanIcon />, issues: resumeData.issues.hardSkills },
          { label: 'Soft Skills', value: 40, icon: <HandymanIcon />, issues: resumeData.issues.softSkills },
          { label: 'Recruiter Tips', value: 60, icon: <TipsAndUpdatesIcon />, issues: resumeData.issues.recruiterTips },
          { label: 'Formatting', value: 30, icon: <FormatAlignLeftIcon />, issues: resumeData.issues.formatting },
          { label: 'Resume Keywords', value: 80, icon: <KeywordsIcon />, issues: resumeData.issues.keywords }
        ].map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              {item.icon}
              <Typography variant="body1" sx={{ ml: 1, flexGrow: 1 }}>
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.issues} issues to fix
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.value}
              sx={{
                height: 8,
                borderRadius: 5,
                bgcolor: 'grey.300',
                '& .MuiLinearProgress-bar': {
                  bgcolor: item.value > 50 ? 'green' : 'orange',
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AnalysisLeftPanel;
