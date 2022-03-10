import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { backend_url, eventsEP} from '../strings/strings';

// single event page
function EventPage(props){

    const [eventState, setEventState] = useState({});
    const {pk} = useParams();

    const getEventData = async () => {
        const response = await fetch(backend_url + eventsEP + pk);
        const data = await response.json();
        let eventJSONObj = JSON.parse(data[pk]);
        setEventState(eventJSONObj);
    }

    useEffect(()=>getEventData(), []);

    const loaded = () => {

        let event = eventState;

        return (
            <div key="eventkey">
                <h1>Single Event View: {event.name}</h1>
            </div>
        )
    }

    return eventState ? loaded() : <h1>Loading...</h1>
}

export default EventPage;