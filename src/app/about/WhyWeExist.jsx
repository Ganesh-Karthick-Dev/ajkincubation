import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const WhyWeExist = () => {
    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const image = imageRef.current

        if (!container || !image) return

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
            
            gsap.to(image, {
                rotation: angle + 90, // +90 to adjust for initial orientation
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const handleMouseEnter = () => {
            container.addEventListener('mousemove', handleMouseMove)
        }

        const handleMouseLeave = () => {
            container.removeEventListener('mousemove', handleMouseMove)
            // Return to original rotation
            gsap.to(image, {
                rotation: 40, // Your original rotation
                duration: 0.5,
                ease: "power2.out"
            })
        }

        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter)
            container.removeEventListener('mouseleave', handleMouseLeave)
            container.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const containerRef2 = useRef(null)
    const imageRef2 = useRef(null)

    useEffect(() => {
        const container = containerRef2.current
        const image = imageRef2.current

        if (!container || !image) return

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
            
            gsap.to(image, {
                rotation: angle + 90, // +90 to adjust for initial orientation
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const handleMouseEnter = () => {
            container.addEventListener('mousemove', handleMouseMove)
        }

        const handleMouseLeave = () => {
            container.removeEventListener('mousemove', handleMouseMove)
            // Return to original rotation
            gsap.to(image, {
                rotation: 5, // Original rotation for the second image (rotate-5)
                duration: 0.5,
                ease: "power2.out"
            })
        }

        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            container.removeEventListener('mouseenter', handleMouseEnter)
            container.removeEventListener('mouseleave', handleMouseLeave)
            container.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <div ref={containerRef} className=' text-white rounded-3xl border-[15px] border-gray-100 relative '>
                <div className='absolute inset-0 rounded-3xl' style={{ backgroundImage: "url('/webp/aboutbg1.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", transform: "scaleX(-1)" }}></div>

               
                    <Image ref={imageRef} src="/webp/questionmark.webp" alt="why-we-exist" width={2000} height={2000} className=' absolute w-[210px] h-[210px] z-50 -top-[5.5rem] left-[25%] transform rotate-40' />

                
                <div className=' flex flex-col gap-5 rounded-xl px-[3.5rem] py-[4rem] w-[60%] bg-gradient-to-r from-[#4E73FF] from-0% via-[#4E73FF] via-60% to-transparent to-100% relative z-10'>
                    <p className='text-3xl font-semibold'>Why We Exist</p>
                    <p className='text-sm'>India’s next wave of startups won’t just come from metros. They’ll emerge from classrooms, labs, and small towns places full of raw talent and untapped potential. AIIF exists to bridge the gap between grassroots innovation and global opportunity.</p>
                    <p className='text-sm'>Our incubator helps first-generation entrepreneurs take confident steps toward product building, fundraising, market validation, and company formatio</p>
                </div>
            </div>

            <div ref={containerRef2} className=' text-white mt-[7rem] rounded-3xl border-[15px] border-gray-100 relative '>
                <div className='absolute inset-0 rounded-3xl' style={{ backgroundImage: "url('/webp/aboutbg1.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", transform: "scaleX(-1)" }}></div>

               
                    <Image ref={imageRef2} src="/webp/home.webp" alt="why-we-exist" width={2000} height={2000} className=' absolute w-[230px] h-[230px] z-50 -top-[8.5rem] right-[5%] transform rotate-5' />

                
                <div className=' flex flex-col items-end gap-5 rounded-xl px-[3.5rem] py-[4rem] justify-self-end w-[60%] bg-gradient-to-l from-[#00CA40] from-0% via-[#00CA40] via-60% to-transparent to-100% relative z-10'>
                    <p className='text-3xl font-semibold'>Why We Exist</p>
                    <p className='text-sm text-end'>India’s next wave of startups won’t just come from metros. They’ll emerge from classrooms, labs, and small towns places full of raw talent and untapped potential. AIIF exists to bridge the gap between grassroots innovation and global opportunity.</p>
                    <p className='text-sm text-end'>Our incubator helps first-generation entrepreneurs take confident steps toward product building, fundraising, market validation, and company formatio</p>
                </div>
            </div>
        </>
    )
}

export default WhyWeExist