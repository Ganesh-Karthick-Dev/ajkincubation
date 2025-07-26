import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React from 'react'
import BentoGrid from '../../Components/BentoGrid.jsx'
import OtherSection from './OtherSection.jsx'

const page = () => {
  return (
    <>
    <LayoutWrapper>
    <div className="container mx-auto font-outfit mt-[2rem]">
        <h1 className='text-6xl font-bold text-center mb-[2rem]'>Resource</h1>

        <div className='mb-[5rem]'>
          {/* Bento Grid Layout */}
          <BentoGrid />
        </div>

        <div className=' mt-[2rem]'>
          
          <OtherSection />
        </div>

    </div>
    </LayoutWrapper>
    </>
  )
}

export default page