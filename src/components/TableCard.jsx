import React from 'react'
import UpperCard from './UpperCard';

const TableCard = () => {
    const songs = [
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        { title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg" },
        { title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg" },
        // Add more songs as needed
      ];
  return (
    <div>
       <UpperCard
          title="Quick Picks"
          btn="Play All"
        />
        <div className='my-[2%] flex overflow-hidden'>
         
              <ul className='w-full grid grid-cols-[32%,32%,32%,32%,32%] gap-[0.5] grid-rows-auto  overflow-x-hidden hover:overflow-x-auto scrollbar'>
                {songs.map((song,index)=>(
                  <li key={index} className='min-w-[95%] m-[1%_3%] flex text-ellipsis  '>
                    

                  <div className='w-[20%] flex justify-center items-center'><img src={song.image} alt="" /> </div>
                  <div className='w-[80%] ml-[2%] items-center '>
                  <h3 className='text-base font-semibold  whitespace-nowrap overflow-hidden w-[95%] truncate'>{song.title}</h3>
                  <p className='whitespace-nowrap inline-block truncate max-w-[70%] min-w-[20%] overflow-hidden text-ellipsis text-sm '>{song.artist}</p>
                  <span className='inline-block whitespace-nowrap overflow-hidden text-sm   min-w-[25%] max-w-[79%] truncate  ml-[2%]'>• {song.movie}</span>
                  
                  </div>
                   
                </li>
                 ))} 
              </ul>
         
        </div>

    </div>
  )
}

export default TableCard
