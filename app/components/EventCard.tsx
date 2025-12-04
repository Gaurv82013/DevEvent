
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock4, MapPin } from 'lucide-react';

interface props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({title, image, slug, location, date, time}:props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
        <Image src={image} alt={title} width={410} height={300} className="poster"/>
        <div className='flex flex-row  items-center gap-1'>
            <MapPin className='w-4 h-4'/>
            <p>{location}</p>
        </div>
        <p className='title'>{title}</p>
        <div className="datetime">
            <div className='flex flex-row justify-center items-center'>
                <Calendar className='w-4 h-4'/>
                <p>{date}</p>
            </div>
            <div className='flex flex-row justify-center items-center'>
                <Clock4 className='w-4 h-4'/>
                <p>{time}</p>
            </div>
        </div>
    </Link>
  )
}

export default EventCard
