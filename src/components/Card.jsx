import React from 'react'
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({
    image,
    title,
    subtitle
}) => {
  return (
    <button className=' min-w-[23%] justify-between items-center  p-[2%_1%] group'>
            <div className='flex justify-center items-center relative'>
              
              <div className='absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:backdrop-blur-[1px] hover:bg-gradient-to-b from-black/60 to-black/90 w-[80%] h-[100%] flex justify-center items-center'><FontAwesomeIcon icon={faPlay} className='text-3xl' /></div>
              <img className="max-w-[80%] rounded-md hover:" src={image} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-center'>{title}</div>
              <div className='text-center text-gray-400'>
                {subtitle}
              </div>
            </div>
          </button>
  )
}

export default Card
