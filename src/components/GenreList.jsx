import React, { useState, useEffect } from 'react'
import {Button} from '../index'
import WorkoutImage from '../assets/genreImg/Workout.jpg'
import CommuteImage from '../assets/genreImg/Commute.jpg'
import EnergizeImage from '../assets/genreImg/Energize.jpg'
import FeelgoodImage from '../assets/genreImg/Feelgood.jpg'
import FocusImage from '../assets/genreImg/Focus.jpg'
import LoveImage from '../assets/genreImg/Love.jpg'
import PartyImage from '../assets/genreImg/Party.jpg'
import RelaxImage from '../assets/genreImg/relax.jpg'
import SadImage from '../assets/genreImg/Sad.jpg'
import SleepImage from '../assets/genreImg/Sleep.jpg'
import HomeImage from '../assets/genreImg/Home.jpg'
import { useSelector, useDispatch } from 'react-redux'
import {clearValue} from "../store/genreSlice"




const GenreList = () => {
  const genreImages = {
  Workout: WorkoutImage,
  "Feel good": FeelgoodImage,
  Energize: EnergizeImage,
  Relax: RelaxImage,
  Commute: CommuteImage,
  Focus: FocusImage,
  Romance:LoveImage,
  Party:PartyImage,
  Sad:SadImage,
  Sleep:SleepImage,
  defaultGenre:HomeImage
  // Map other genres to their imported images here...
};
  const [currGenres,setCurrGenres] = useState("")
  const dispatch = useDispatch()
  const homeClicked = useSelector((state)=>state.genre.value)
  const genres = ["Workout", "Feel good", "Energize","Relax","Romance","Party","Commute","Sad","Focus","Sleep" ]
 
  useEffect(() => {
    if (homeClicked.length > 0) {
      setCurrGenres(homeClicked);
      dispatch(clearValue())
    }
  }, [homeClicked])  

  
  return (
    <div>
      <div   style={{
          backgroundImage: `url(${genreImages[currGenres] || genreImages["defaultGenre"]})`,
        }} className={` bg-cover bg-no-repeat bg-center h-[45vh]  relative `}>
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 backdrop-blur-[1px]'></div>
        <div className='flex justify-between p-[3%_7%] relative z-10' >
          {genres.map((genre) =>(
            <Button
            key={genre}
            className={`hover:bg-[#1e2328] ${currGenres == genre
              ? "bg-white text-gray-950 hover:bg-white font-medium "
              : " text-white bg-[#9b999933]"}`}
            children={genre}
            bgColor=''
            onClick={()=>{setCurrGenres(genre)}}
            
            />
          
          ))}
          
          
        </div>
      </div>
    </div>
  )
}

export default GenreList
