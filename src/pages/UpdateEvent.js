import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axiosInstance from '../axiosApi';
import { useParams } from 'react-router';
import axios from 'axios';

function UpdateEvent(props){
    const [form, setForm] = useState({
        "game": "",
        "name": "",
        "players": [1],
        "description": "",
        "location": "",
        "creator": "",
        "spotsAvailable": "",
        "spotsTotal": ""
    });

    const handleChange = (e) => {
        setForm( (prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };

    const {pk} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log(form);
            axiosInstance.put('api/update/event/' + e.target.id + '/', form).then(
                (res)=> {return res;}
            )
        } catch (err){
            throw err;
        }
    };
    
    return (
        <div className="container">
            <Form id={pk} onSubmit = {handleSubmit}>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Game</Form.Label>
                    <Form.Control name="game" type="text" placeholder="Game" value={form.game} onChange={handleChange}/>
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Event Name" value={form.name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Players</Form.Label>
                    <Form.Control name="players" type="text" placeholder="Players" value={form.players} onChange={handleChange} />
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange}/>
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Location</Form.Label>
                    <Form.Control name="location" type="text" placeholder="Location" value={form.location} onChange={handleChange}/>
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Hosted by</Form.Label>
                    <Form.Control name="creator" type="number" placeholder="Hosted by" value={form.creator} onChange={handleChange}/>
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Spots Available</Form.Label>
                    <Form.Control name="spotsAvailable" type="number" placeholder="Spots Available" value={form.spotsAvailable} onChange={handleChange}/>
                </Form.Group>
                <Form.Group class="col-4 offset-4">
                    <Form.Label>Total Spots</Form.Label>
                    <Form.Control name="spotsTotal" type="number" placeholder="Total Spots" value={form.spotsTotal} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        
    );
}

export default UpdateEvent;