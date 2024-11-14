import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import GenreList from '../components/GenreList'
import userImage from '../assets/userpic.jpg'
import { HorizontalCard, TableCard } from '../index'


const Home = () => {


  const status = useSelector((state)=>state.auth.status)
  return (
    <div className='relative'>
      <GenreList />
     { status && <div className='mt-[3%]'>

        <HorizontalCard
          subtitle="Suraj Bisht"
          title="Listen again"
          avatar={userImage}
          btn="More"
        />
      </div>}

      <div className={` absolute mt-[12]  w-full  p-[2%_7%] ${!status ?"top-[40%]":"top-[156%]"} `}>
        <TableCard/>
      </div>

    </div>
  )
}


export default Home
