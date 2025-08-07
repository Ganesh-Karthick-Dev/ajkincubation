import { useFrame } from "@react-three/fiber";
import { useCurrentSheet } from "@theatre/r3f";
import { useEffect, useRef, useState } from "react";

const ScrollIndicator = ({
    showStartTime = 4.00,
    showEndTime = 5.00,
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

    // This component only handles timing, doesn't render anything
    return null;
};

export default ScrollIndicator; 