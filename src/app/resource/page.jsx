import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React from 'react'
import BentoGrid from '../../Components/BentoGrid.jsx'
import OtherSection from './OtherSection.jsx'

const page = () => {
  return (
    <>
    <LayoutWrapper>
    <div className="container mx-auto font-outfit mt-[4rem]">
        <h1 className='text-6xl font-bold text-center'>Resource</h1>

        <div className='mb-[5rem]'>
          {/* Bento Grid Layout */}
          <BentoGrid />
        </div>

        <div>
          <p className='text-4xl font-bold text-center'>Sample Title</p>
          <OtherSection />
        </div>

    </div>
    </LayoutWrapper>
    </>
  )
}

export default page