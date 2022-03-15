import {useState, useEffect} from 'react';
import {backend_url, eventsEP} from '../strings/strings';
import {Col, Container, Nav, Row} from 'react-bootstrap';

// Get a HTML elem of all events 
function EventList(props){

    const [allEventState, setEventState] = useState(null);

    const getEvents = async () => {
        const response = await fetch(backend_url + eventsEP);
        const data = await response.json();
        let eventIds = Object.keys(data);
        let eventsArr = eventIds.map((id)=>(
            JSON.parse(data[id])
        ));
        setEventState(eventsArr);
    }

    useEffect(()=>{
        getEvents();
    }, []);

    const loaded = () => {
        return(
            allEventState.map((event, index)=>(
                <a className="eventRef" href={`/events/${event.pk}`}>
                    <Container key={index} display="flex">
                        <Row xs={10}>
                            <Col xs={2} className="eventImg">
                                <h1>Image here</h1>
                            </Col>
                            <Col className="eventInfo">
                                <Row className="align-items-center">
                                    <Col>
                                        <h1>{event.name}</h1>
                                        <p>Hosted by: {event.creator}</p>
                                    </Col>
                                    <Col>
                                        <p>Description: {event.desc}</p>
                                        <p>Location: {event.location}</p>
                                    </Col>
                                    <Col>
                                        <p>Spots available: {event.spots}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </a>
            ))
        );
    };

    return allEventState ? loaded() : <h1>Loading...</h1>
}

export default EventList;