import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Main page component
import SignInSide from './SignInSide'; // Sign-in page component
import SignUp from './SignUp'; // Sign-up page component
import ResumeUploadPage from './ResumeUploadPage'; // Import the ResumeUploadPage component
import AnalysisPage from './AnalysisPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main marketing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the sign-in page */}
        <Route path="/signin" element={<SignInSide />} />

        {/* Route for the sign-up page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for the resume upload page */}
        <Route path="/upload-resume" element={<ResumeUploadPage />} />

        {/* Route for Analysis Page */}
        <Route path="/analysis" element={<AnalysisPage />} />

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
