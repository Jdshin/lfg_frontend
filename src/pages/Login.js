import {useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import axiosInstance from "../axiosApi";

function Login(props){

    const [form, setForm] = useState({
        username: "",
        password: "",
    });


    const handleChange = (e) => {
        setForm( (prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.username);
        try {
            const response = axiosInstance.post('api/token/obtain/', {
                username: form.username,
                password: form.password
            }).then((response)=>{
                axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                return response.data;
            });
            console.log(localStorage.getItem('access_token'));
        } catch (error) {
            throw error;
        }
    }

    return (
        <div className = "container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;