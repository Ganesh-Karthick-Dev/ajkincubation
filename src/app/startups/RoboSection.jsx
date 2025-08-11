import { Drone } from '@/Three/staticpages/drone'
import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'

const RoboSection = () => {
    const fovRef = useRef(55)
    const [showGlow, setShowGlow] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const handleResize = () => {
            fovRef.current = window.innerWidth >= 768 ? 55 : 80
        }

        // Set initial FOV
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Intersection Observer for triggering effect only when section comes into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTriggered) {
                        // Section is visible and effect hasn't been triggered yet
                        setHasTriggered(true)
                        
                        // Start the glow and blink effect
                        setTimeout(() => {
                            setShowGlow(true)
                            // Turn off glow after 3 seconds
                            setTimeout(() => setShowGlow(false), 3000)
                        }, 500)
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: '0px'
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [hasTriggered])

    return (
        <div ref={sectionRef}>
            <h1 className=' my-[70px]  text-center text-4xl font-bold'>Grow Your Startup with Expert Backing</h1>
            <div className="grid grid-cols-12 gap-4 ">


                {/* left side */}
                <div className=" col-span-12 md:col-span-3 flex flex-col gap-5 justify-evenly">

                    <div>
                        <p className="text-xl font-semibold  mb-2">Launch Big with AJK AIIF</p>
                        <p className=" leading-relaxed">AJK AIIF is where bold ideas take off. We support aspiring founders with everything they need to turn innovative concepts into real-world startups.</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold  mb-2">Startup Clinic – Real Help, Real Fast</p>
                        <p className=" leading-relaxed">Our hands-on clinic offers expert feedback, business coaching, and pitch support to shape your idea into a solid business.</p>
                    </div>

                    <div className=" md:hidden text-center mb-3">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium transition-all duration-1000 ${
                            showGlow 
                                ? 'shadow-[0_0_20px_rgba(59,130,246,0.8)] border-blue-400 scale-105 animate-pulse' 
                                : 'shadow-none scale-100'
                        }`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                            </svg>
                            <span>Touch the drone to explore</span>
                        </div>
                    </div>

                </div>

                {/* middle side */}
                <div className="h-[40vh] md:h-[400px] w-full  col-span-12 md:col-span-6">
                    <Canvas
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Suspense fallback={null}>
                            <PerspectiveCamera 
                                makeDefault 
                                position={[0, 0, 0]} 
                                fov={fovRef.current} 
                            />
                            <OrbitControls />
                            <Drone />
                            <Environment preset="city" />
                        </Suspense>
                    </Canvas>
                    {/* Interactive instruction */}
                    <div className=" hidden md:block text-center mb-3">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium transition-all duration-1000 ${
                            showGlow 
                                ? 'shadow-[0_0_20px_rgba(59,130,246,0.8)] border-blue-400 scale-105 animate-pulse' 
                                : 'shadow-none scale-100'
                        }`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                            </svg>
                            <span>Move your cursor over the drone to interact</span>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className=" col-span-12 md:col-span-3 flex flex-col gap-5 justify-evenly">
                    
                    <div>
                        <p className="text-xl font-semibold  mb-2">Connected to the Right People</p>
                        <p className=" leading-relaxed">With backing from StartupTN, we plug you into Tamil Nadu's startup ecosystem — funding, visibility, and opportunities all within reach.</p>
                    </div>

                    <div>
                        <p className="text-xl font-semibold  mb-2">Ready to Scale</p>
                        <p className=" leading-relaxed">From strategy to market entry, we guide you every step of the way so your startup doesn't just launch — it grows strong.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RoboSection

