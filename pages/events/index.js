import EventList from "@/component/events/event-list";
import EventSearch from "@/component/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const AllEvents=()=>{
    const events=getAllEvents();
    const router=useRouter();
    function findEvensHandler(year,month)
    {
        const fullPath=`events/${year}/${month}`
            router.push(fullPath)
    }
    return(
        <div>
            <h1>All Evenets</h1>
            <EventSearch onSearch={findEvensHandler}/>
            <EventList items={events}/>
        </div>
    )
}

export default AllEvents;