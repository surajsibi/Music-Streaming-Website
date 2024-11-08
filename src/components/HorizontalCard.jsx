import React from 'react'
import {Card, UpperCard} from '../index'
import userImage from '../assets/userpic.jpg'

const HorizontalCard = ({
subtitle,
title,
avatar,
btn

}) => {
  const songs = [
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
    {title:"Bulleya",image:"/songsimg/sultan.jpg",subtitle:"Papon"},
  ]
  return (
    <div className='main z-20 w-full  absolute top-[35%]  p-[2%_7%]'>
        <UpperCard
          subtitle={subtitle}
          title = {title}
          avatar={avatar}
          btn={btn}
        />
        <div  className=' overflow-x-hidden hover:overflow-x-auto scrollbar whitespace-nowrap w-[full] gap-4 py-4  flex '>
         {songs.map((song,index)=>(
          <div  className='min-w-[20%]' key={index}> <Card
          image={song.image}
          title={song.title}
          subtitle={song.subtitle}
        /></div>
         ))}
          
        </div>





      </div>
  )
}

export default HorizontalCard
