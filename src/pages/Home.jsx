import React, { useRef } from 'react'
import GenreList from '../components/GenreList'

import { ListenAgainCard } from '../index'


const Home = () => {

  return (
    <div className='relative'>
      <GenreList />
      <div className='mt-[3%]'>

        <ListenAgainCard />
      </div>

      <div className='border border-pink-700 absolute w-full top-[176%] p-[2%_7%] quickpick'>
        <div className='flex justify-between border border-red-600'>
          <div className="text-3xl font-bold">
            Quick Picks
          </div>
          <div className='border border-gray-500 rounded-xl p-[1%_2%] flex justify-center items-center'>
            <div className='text-center flex justify-center items-center '>Play All</div>
          </div>
        </div>
        <div className='border border-yellow-600'>

        </div>
      </div>

    </div>
  )
}

export default Home
