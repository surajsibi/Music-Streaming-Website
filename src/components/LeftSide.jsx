import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faCompass } from "@fortawesome/free-solid-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from 'react-redux';


const LeftSide = () => {
  const leftStatus = useSelector((state) => state.hamburger.leftStatus)
  const status = useSelector((state)=>state.auth.status)

  return (

    <div className=''>
      {leftStatus ? (<><div className='grid gap-3 sm:my-6 sm:grid-rows-3'>
        <div className='flex sm:p-[4%_9%] sm:gap-[14%] items-center  '>
          <FontAwesomeIcon icon={faHouse} className='sm:text-[24px]' />
          <div className='font-semibold sm:text-[19px]'>Home</div>
        </div>
        <div className='flex sm:p-[4%_9%] sm:gap-[14%] items-center  '>
          <FontAwesomeIcon icon={faCompass} className='sm:text-[24px]' />
          <div className='font-semibold sm:text-[19px] '>Explore</div>
        </div>
        <div className='flex sm:p-[4%_9%] sm:gap-[14%] items-center '>
          <FontAwesomeIcon icon={faMusic} className='sm:text-[24px]' />
          <div className='font-semibold sm:text-[19px]'>Library  </div>
        </div>
       
      </div>
      {status ?<div className='border-y-2 border-gray-700'>
        <button className='items-center flex sm:w-[90%] sm:rounded-[50rem] sm:m-[8%_5%] hover:bg-[#353535] bg-[#1d1d1d] sm:p-[5%_2%] justify-around'><FontAwesomeIcon icon={faPlus} className='sm:text-[24px]' /><span>New Playlist</span></button>
      </div> : <div className='border-y-2 border-gray-700'>
        <button className='items-center flex sm:w-[90%] sm:rounded-[50rem] sm:m-[8%_5%] hover:bg-[#353535] bg-[#1d1d1d] sm:p-[5%_2%] justify-around'><div>Sign Up</div>
        </button>
        <div className='sm:m-[6%_11%] text-center'>Signup to add and see your playlist</div>
      </div>}
      {status ?<div className='playlist'>
        <div>Liked Music</div>
      </div>:null}
      </>)
       :
       (<><div className='grid gap-7 grid-rows-3'>

        <div className='grid grid-rows-2 sm:mt-2 justify-center items-center '>
          <FontAwesomeIcon icon={faHouse} className='sm:text-[155%] sm:px-[7px] sm:mt-2' />
          <div className='sm:mt-1'>Home</div>
        </div>
        <div className='grid grid-rows-2  justify-center '>
          <FontAwesomeIcon icon={faCompass} className='sm:text-[24px] sm:px-[12px] sm:mt-2' />
          <div className='sm:mt-1'>Explore</div>
        </div>
        <div className='grid grid-rows-2  justify-center '>
          <FontAwesomeIcon icon={faMusic} className='sm:text-[24px] sm:px-[11px] sm:mt-2' />
          <div className='sm:mt-1'>Library</div>
        </div>
      </div>
      
      

      </>)}





    </div>

  )
}

export default LeftSide
