import React, { useState, useEffect } from 'react';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

// Theatre.js Timing Controller (Inside Canvas)
const RobotTopText = ({ 
  title,
  description,
  actionText,
  onActionClick,
  showStartTime = 19.56,
  showEndTime = 20.0,
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

export default RobotTopText;