import React, { useState, useEffect } from 'react';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

// Theatre.js Timing Controller (Inside Canvas)
const TextFour = ({ 
  title = "Mentors Who Move You Forward",
  description = "1-on-1 sessions with startup experts to sharpen your pitch, product, and path.",
  actionText,
  onActionClick,
  showStartTime = 24.57,
  showEndTime = 25.02,
  onVisibilityChange 
}) => {
  const sheet = useCurrentSheet();
  const [currentDuration, setCurrentDuration] = useState(0);

  useFrame(() => {
    if (sheet) {
      setCurrentDuration(sheet.sequence.position);
    }
  });

  useEffect(() => {
    // Show popup when in the correct time range
    if (currentDuration >= showStartTime && currentDuration <= showEndTime) {
      onVisibilityChange(true);
    } else {
      onVisibilityChange(false);
    }
  }, [currentDuration, showStartTime, showEndTime, onVisibilityChange]);

  return null; // This component doesn't render anything, just controls timing
};

export default TextFour;