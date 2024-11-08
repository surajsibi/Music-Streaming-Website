import React from 'react'

const UpperCard = ({
  subtitle,
  title,
  avatar,
  btn,

}) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex'>
        {avatar && <div className=''>
          <img className=' sm:w-[66%]  rounded-[12rem]' src={avatar} alt="" />
        </div>}
        <div>
          {subtitle && <div className='text-xl font-light text-gray-300'>
            {subtitle}
          </div>}
          <div className='text-3xl'>
            {title}
          </div>
        </div>
      </div>
      <div className='flex gap-10 justify-center items-center w-[20%] '>
        <button className={`border border-gray-500 rounded-xl w-[50%] p-[5%_1%] flex justify-center items-center`}>
          <div className='text-center flex justify-center items-center '>{btn}</div>
        </button>
      </div>
    </div>
  )
}

export default UpperCard
