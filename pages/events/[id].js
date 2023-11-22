import EventContent from "@/component/event-detail/event-content";
import EventLogistics from "@/component/event-detail/event-logistics";
import EventSummary from "@/component/event-detail/event-summary";
import ErrorAlert from "@/component/ui/error-alert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const EventDetail=()=>{
    const router=useRouter();
    const eventId=router.query.id;
    const event=getEventById(eventId)
    if(!event)
    {
        return(
           <ErrorAlert>
             <h1>No Data Found</h1>
           </ErrorAlert>
        )
    }
    return(
        <div>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </div>
    )
}

export default EventDetail;