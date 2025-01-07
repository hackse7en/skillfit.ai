import React from 'react';
import { Box, Typography, Button, Divider, LinearProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import HandymanIcon from '@mui/icons-material/Handyman';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';

const AnalysisLeftPanel = ({ resumeData }) => {
  return (
    <Box
      sx={{
        width: '300px',
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        position: 'fixed',
        top: '64px', // Leave space for AppBar
        left: '16px',
        zIndex: 1000,
        color: 'text.primary',
      }}
    >
      {/* Match Rate Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Match Rate
        </Typography>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            mx: 'auto',
            borderRadius: '50%',
            border: `6px solid ${resumeData.matchRate === 'Low' ? 'red' : 'green'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: resumeData.matchRate === 'Low' ? 'red' : 'green',
            }}
          >
            {resumeData.matchRate} ({resumeData.matchPercentage}%)
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
