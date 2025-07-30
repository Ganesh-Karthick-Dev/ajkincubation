import { Drone } from '@/Three/staticpages/drone'
import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'

const RoboSection = () => {
    const fovRef = useRef(55)

    useEffect(() => {
        const handleResize = () => {
            fovRef.current = window.innerWidth >= 768 ? 55 : 80
        }

        // Set initial FOV
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
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

                </div>

                {/* middle side */}
                <div className="h-[70vh] md:h-[400px] w-full col-span-12 md:col-span-6">
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
        </>
    )
}

export default RoboSection

