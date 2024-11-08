import React from 'react'
import {Card, UpperCard} from '../index'
import userImage from '../assets/userpic.jpg'

const ListenAgainCard = ({
}) => {
  return (
    <div className='main z-20 w-full  absolute top-[35%]  p-[2%_7%]'>
        <UpperCard
          subtitle="Suraj Bisht"
          title="Listen again"
          avatar={userImage}
          btn="More"
        />
        <div  className=' overflow-x-hidden hover:overflow-x-auto scrollbar whitespace-nowrap  gap-4 py-4  flex '>
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
          <Card
            image="/songsimg/sultan.jpg"
            title="Bulleya"
            subtitle={"Papon"}
          />
        </div>





      </div>
  )
}

export default ListenAgainCard
