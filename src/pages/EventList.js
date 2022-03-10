import {useState, useEffect} from 'react';
import {backend_url, eventsEP} from '../strings/strings'

// Get a HTML elem of all events 
function EventList(props){

    const [eventState, setEventState] = useState(null);

    const getEvents = async () => {
        const response = await fetch(backend_url + eventsEP);
        const data = await response.json();

        let eventIds = Object.keys(data);

        let eventsArr = eventIds.map((id)=>(
            JSON.parse(data[id])
        ));
        setEventState(eventsArr);
    }

    useEffect(()=>getEvents());

    const loaded = () => {
        return(
            eventState.map((event, index)=>(
                <div className="container" key={index}>
                    <h1>{event.name}</h1>
                </div>
            ))
        );
    };

    return eventState ? loaded() : <h1>Loading...</h1>
}

export default EventList;