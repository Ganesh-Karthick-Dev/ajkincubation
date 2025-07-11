import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React from 'react'
import StackingCard from '../../Components/stacking-card.jsx'

const page = () => {
  return (
    <>
    <LayoutWrapper>
    <div className="container mx-auto font-outfit mt-[4rem]">
        <h1 className='text-6xl font-bold text-center'>Resource</h1>

        <div className='mb-[5rem]'>
          {/* here - stacking cards */}
          <StackingCard />
        </div>
    </div>
    </LayoutWrapper>
    </>
  )
}

export default page