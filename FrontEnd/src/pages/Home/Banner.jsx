import React from 'react'
import banner from "../../assets/banner.png"
function Banner() {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={banner} alt="" />
        </div>
        <div className='md:w-1/2 w-full '>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Weak</h1>
            <p className='mb-10'>It's time to update yout reading list with some of the latest gratest Releases
                in the literary world. from heart-pumping thrillers to captivating memoris,
                this week's new releases offer something for everyone
            </p>
            <button className='btn-primary'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Banner
