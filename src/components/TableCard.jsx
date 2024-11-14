import React, { useEffect, useRef, useState } from 'react'
import UpperCard from './UpperCard';
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faHeart as HeartRegular } from "@fortawesome/free-regular-svg-icons"
import { faHeart as HeartSolid } from "@fortawesome/free-solid-svg-icons"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import MenuCard from './MenuCard';

const TableCard = () => {

  const [songs, setSongs] = useState([
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
    { id: uuidv4(), title: "Bulleya", artist: "Papon", movie: "Sultan", image: "/songsimg/sultan.jpg", isLiked: false },
    { id: uuidv4(), title: "Pal Pal Hai Bhaari", artist: "Madhushree, Vijay Prakash, Ashutosh Gowariker", movie: "Swades", image: "/songsimg/palpalhaibhari.jpg", isLiked: false },
  ]);



  const [menuSongID, setMenuSongID] = useState(null)
  const menuRef = useRef(null);
  const [handleClickOutsideClose, setHandleClickOutsideClose] = useState(true)
  const addtoplaylist = (songid, event) => {

    console.log(songid, "playlist")
  }




  const handleClickLike = (songID, index) => {
    console.log(index)
    setSongs(prevsongs => prevsongs.map((song) => song.id === songID ? { ...song, isLiked: !song.isLiked } : song))
  };
  const toggleMenu = (songID, e) => {
    if (handleClickOutsideClose) {
      setMenuSongID(prevID => (prevID === songID ? null : songID))
      setHandleClickOutsideClose(false)
    }
  }



  useEffect(() => {

    const handleClickOutside = (event) => {
      
      console.log(event)
      if (!handleClickOutsideClose && menuRef.current && !event.target.closest(".menucard")) {
        setMenuSongID(null); // Close the menu if clicked outside
        setTimeout(() => {
          setHandleClickOutsideClose(true);
        }, 1000);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuSongID, menuRef]);

  return (
    <div className='overflow-visible relative'>
      <UpperCard
        title="Quick Picks"
        btn="Play All"
      />
      <div className='my-[2%] flex  '>

        <ul className='w-full grid grid-cols-[32%,32%,32%,32%,32%] gap-[0.5] grid-rows-4  overflow-x-hidden hover:overflow-x-auto scrollbar '>
          {songs.map((song, index) => (
            <li key={index} className='min-w-[95%] m-[1%_3%] flex text-ellipsis relative group '>
              <div className='absolute group-hover:bg-gradient-to-b from-black/60 to-black/90 hover:backdrop-blur-[1px] opacity-0 w-full h-full group-hover:opacity-100 z-10'></div>


              <div className='w-[20%] flex justify-center items-center relative'><FontAwesomeIcon icon={faPlay} className='text-3xl absolute  opacity-0 group-hover:opacity-100 z-10' /><img src={song.image} alt="" /> </div>
              <div className='w-[78%] ml-[2%] items-center  '>
                <h3 className='text-base font-semibold group-hover:hidden whitespace-nowrap overflow-hidden w-[95%] truncate'>{song.title}</h3>
                <h3 className={`text-base font-semibold group-hover:block ${menuSongID ? "block" : "hidden"} absolute hidden whitespace-nowrap overflow-hidden w-[20%] truncate z-20`}>{song.title}</h3>
                <p className='whitespace-nowrap inline-block truncate group-hover:hidden max-w-[70%] min-w-[20%] overflow-hidden text-ellipsis text-sm '>{song.artist}</p>
                <p className='whitespace-nowrap absolute group-hover:inline-block hidden top-[41%] truncate w-[11%] overflow-hidden text-ellipsis text-sm z-20' >{song.artist}</p>
                <span className='inline-block whitespace-nowrap overflow-hidden text-sm group-hover:hidden  min-w-[25%] max-w-[79%] truncate  ml-[2%]'>• {song.movie}</span>
                <span className='hidden whitespace-nowrap overflow-hidden text-sm  absolute  group-hover:inline-block  w-[13%] left-[31%] truncate top-[41%] ml-[2%] z-20'>• {song.movie}</span>
                <div className='absolute   group-hover:flex justify-around hidden p-1 left-[43%] w-[57%] z-20  '>
                  <button className='hover:bg-gray-800 flex justify-center items-center p-[4%] rounded-[50%]' onClick={() => handleClickLike(song.id, index)}>
                    <FontAwesomeIcon icon={song.isLiked ? HeartSolid : HeartRegular} className={`transition-all duration-300 ease-in-out ${song.isLiked ? 'scale-110' : 'scale-100'}`} style={{ color: "#ed1212", fontSize: "23" }} /></button>
                  <button className='hover:bg-gray-800 flex justify-center items-center  p-[4%] rounded-[50%] w-[20%]' onClick={(e) => { toggleMenu(song.id, e) }}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />

                  </button>

                </div>
                <div ref={menuRef} className={` menucard w-[80%]  left-[90%] rounded-lg  absolute  bg-[#1d1c1c]  z-[30] ${menuSongID === song.id ? "block" : "hidden"}
                       ${index <= 3 ? "top-[0]" :
                    index === 4 ? "top-0 left-[20%]" :
                      (index >= 5 && index <= 8) ? "top-[-63px]" :
                        index === 9 ? "top-[-63px] left-[20%]" :
                          (index >= 10 && index <= 13) ? "top-[-130px]" :
                            index === 14 ? "top-[-130px] left-[20%]" :
                              (index >= 15 && index <= 18) ? "top-[-190px]" :
                                index === 19 ? "top-[-190px] left-[20%]" :
                                  "top-0"
                  }`}>
                  <div onClick={(e) => { addtoplaylist(song.id, e) }} className=' addtoplaylist1 cursor-pointer'>

                    <div className=' addtoplaylist2 w-full flex justify-start items-center my-[5%] p-2 hover:bg-black'>
                      <div className='addtoplaylist3 w-[15%] flex justify-center items-center ml-[2%] '><img className='invert' src="/icons/add-to-playlist.png" alt="" /></div>
                      <div className='addtoplaylist4 ml-[2%]'>Add to playlist</div>
                    </div>
                  </div>
                  <div className='group cursor-pointer'>

                    <div className='w-full flex justify-start items-center my-[5%] p-2 hover:bg-black'>
                      <div className='w-[15%] flex justify-center items-center ml-[2px]'><img className='invert' src="/icons/play-list.png" alt="" /></div>
                      <div className='ml-[2%]'>Play Next</div>
                    </div>
                  </div>
                  <div className='group cursor-pointer'>

                    <div className='w-full flex justify-start items-center my-[5%] p-2 hover:bg-black'>
                      <div className='w-[15%] flex justify-center items-center ml-[2px]'><img className='invert' src="/icons/playlist.png" alt="" /></div>
                      <div className='ml-[2%]'>Add to queue</div>
                    </div>
                  </div>
                  <div className='group cursor-pointer'>

                    <div className='w-full flex justify-start items-center my-[5%] p-2 hover:bg-black'>
                      <div className='w-[15%] flex justify-center items-center ml-[2px]'><FontAwesomeIcon icon={faCircleUser} /></div>
                      <div className='ml-[2%]'>Go to artist</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TableCard
