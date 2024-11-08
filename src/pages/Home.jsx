import React, { useRef } from 'react'
import GenreList from '../components/GenreList'

import { ListenAgainCard, UpperCard } from '../index'


const Home = () => {
  const songs = [
    { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
    { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
    { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
    { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
    { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
    { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
    // Add more songs as needed
  ];

  return (
    <div className='relative'>
      <GenreList />
      <div className='mt-[3%]'>

        <ListenAgainCard />
      </div>

      <div className=' absolute  w-full top-[176%] p-[2%_7%] '>

        <UpperCard
          title="Quick Picks"
          btn="Play All"
        />
        <div className='border border-pink-600 flex overflow-hidden'>
         
              <ul className='w-full grid grid-cols-[32%,32%,32%,32%,32%] gap-[0.5] grid-rows-auto  overflow-x-hidden hover:overflow-x-auto scrollbar'>
                {songs.map((song,index)=>(
                  <li  className='min-w-[95%] m-[1%_3%] flex text-ellipsis  '>
                    

                  <div className='w-[20%] flex justify-center items-center'><img src={song.image} alt="" /> </div>
                  <div className='w-[80%] ml-[2%] items-center '>
                  <h3 className='text-base font-semibold  whitespace-nowrap overflow-hidden text-ellipsis'>{song.title}</h3>
                  <p className='whitespace-nowrap inline-block truncate w-[20%] overflow-hidden text-ellipsis text-sm '>{song.artist}</p>
                  <span className='inline-block whitespace-nowrap overflow-hidden text-sm text-ellipsis'>• {song.movie}</span>
                  
                  </div>
                   
                </li>
                 ))} 
              </ul>
         
        </div>
      </div>

    </div>
  )
}

export default Home
