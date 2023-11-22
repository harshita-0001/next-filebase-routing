import EventList from "@/component/events/event-list";
import ResultsTitle from "@/component/events/result-title";
import Button from "@/component/ui/button";
import ErrorAlert from "@/component/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const FiletrEvent=()=>{
    const router=useRouter();
    const filterData=router.query.slug;
    if(!filterData)
    {
        return(
            <h1>Loading.....</h1>
        )
    }
    const filterdYear=filterData[0];
    const filterMonth=filterData[1];

    const numYear=+filterdYear;
    const numMonth=+filterMonth;

    const date=new Date(numYear,numMonth-1)
    if(isNaN(numYear)||isNaN(numMonth)||numYear>2030||numYear<2021||numMonth<1||numMonth>12)
    {
        return <h2>invalid filter</h2>
    }
    const FilteredEvents=getFilteredEvents({
        year:numYear,
        month:numMonth,
    })


    if(!FilteredEvents||FilteredEvents.length===0)
    {
        return (
            <Fragment>
                <ErrorAlert>
                <p>No data Found</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        )
    }
    
    return(
        <div>
            <ResultsTitle date={date}/>
            <EventList items={FilteredEvents}/>
        </div>
    )
}

export default FiletrEvent;