import React from 'react';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const TextOne = ({ 
  title, 
  description, 
  actionText, 
  onActionClick, 
  showStartTime = 16.16, 
  showEndTime = 17.5, 
  onVisibilityChange 
}) => {
  const sheet = useCurrentSheet();

  useFrame(() => {
    if (sheet) {
      const currentDuration = sheet.sequence.position;
      const isVisible = currentDuration >= showStartTime && currentDuration <= showEndTime;
      
      // Call the callback to update popup visibility
      if (onVisibilityChange) {
        onVisibilityChange(isVisible, {
          title,
          description,
          actionText,
          onActionClick
        });
      }
    }
  });

  // This component only handles timing, doesn't render anything
  return null;
};

export default TextOne;