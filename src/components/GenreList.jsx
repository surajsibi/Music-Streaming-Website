import React, { useState } from 'react'
import {Button} from '../index'
import WorkoutImage from '../assets/Workout.jpg'
import CommuteImage from '../assets/Commute.jpg'
import EnergizeImage from '../assets/Energize.jpg'
import FeelgoodImage from '../assets/Feelgood.jpg'
import FocusImage from '../assets/Focus.jpg'
import LoveImage from '../assets/Love.jpg'
import PartyImage from '../assets/Party.jpg'
import RelaxImage from '../assets/relax.jpg'
import SadImage from '../assets/Sad.jpg'
import SleepImage from '../assets/Sleep.jpg'
import HomeImage from '../assets/Home.jpg'




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
  const genres = ["Workout", "Feel good", "Energize","Relax","Romance","Party","Commute","Sad","Focus","Sleep" ]

  console.log(currGenres);
  
  return (
    <div>
      <div   style={{
          backgroundImage: `url(${genreImages[currGenres] || genreImages["defaultGenre"]})`,
        }} className={`bg-[url("./assets/${currGenres}.jpg")] bg-cover bg-no-repeat bg-center h-[45vh]  relative `}>
      <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 backdrop-blur-[1px]'></div>
        <div className='flex justify-between p-[3%_7%] relative z-10' >
          {genres.map((genre) =>(
            <Button
            key={genre}
            className="hover:bg-[#1e2328] bg-[#9b999933]"
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
