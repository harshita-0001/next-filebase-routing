import EventItem from "./event-item";
import classses from './event-list.module.css';
const EventList=(props)=>{
    const{items}=props;
    return(
            <ul className={classses.list}>
            {
                items?.map(item=><EventItem
                key={item.id}
                id={item.id}
                image={item.image}
                location={item.location}
                title={item.title}
                date={item.date}
                />)
            }
            </ul>
    )
}

export default EventList;