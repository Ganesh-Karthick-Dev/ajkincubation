import React, { useState, useEffect } from 'react';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

// Theatre.js Timing Controller (Inside Canvas)
const TextThree = ({ 
  title = "Build Fast. Think Bold.",
  description = "Experience hands-on bootcamps that turn raw ideas into real solutions.",
  actionText,
  onActionClick,
  showStartTime = 24.10,
  showEndTime = 24.40,
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

export default TextThree;