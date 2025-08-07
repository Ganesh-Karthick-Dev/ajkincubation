import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const ScrollIndicatorUI = ({ isVisible }) => {
    const chevronRefs = useRef([]);

    // GSAP Animation for chevron icons
    useEffect(() => {
        if (isVisible && chevronRefs.current.length > 0) {
            // Set initial state - all chevrons invisible
            gsap.set(chevronRefs.current, { opacity: 0 });

            // Create timeline for sequential animation
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Animate each chevron in sequence
            chevronRefs.current.forEach((chevron, index) => {
                tl.to(chevron, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }, index * 0.2); // Stagger by 0.2 seconds

                tl.to(chevron, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                }, index * 0.2 + 0.5); // Start fading out after 0.5 seconds
            });

            // Cleanup function
            return () => {
                tl.kill();
            };
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center">
            {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity, index) => (
                <div
                    key={index}
                    ref={(el) => (chevronRefs.current[index] = el)}
                    className="text-white -mb-3"
                    style={{ opacity: opacity }}
                >
                    <ChevronDown size={28} />
                </div>
            ))}
            <p className="text-white text-center text-lg mt-2" style={{ 
                    fontFamily: 'Ethnocentric, sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>Scroll down</p>
            {/* to see imagination turn into impact. */}
        </div>
    );
};

export default ScrollIndicatorUI; 