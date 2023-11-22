import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getFeaturedEvents } from '@/dummy-data'
import EventList from '@/component/events/event-list';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const featuredEvents=getFeaturedEvents();
  return (
   <div>
    <EventList items={featuredEvents}/>
   </div>
  )
}
