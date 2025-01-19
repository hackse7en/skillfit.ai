import React from 'react';

export default function SkillfitIcon() {
  return (
    <img
      src={require('E:/FINAL YEAR PROJECT/SkillFit.AI/skillfit.ai/src/assets/Logo.png')} // Replace 'path-to-your-logo.png' with the correct relative path to your logo file.
      alt="Sitemark Logo"
      style={{
        height: '38px', 
        width: '120px',
        marginRight: '8px' // equivalent to `mr: 2` in Material-UI
      }}
    />
  );
}
