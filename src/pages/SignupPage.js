import {useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import axiosInstance from '../axiosApi';

function SignupPage(props){

    const [form, setForm] = useState({
        username: "",
        email: "",
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
        try {
            axiosInstance.defaults.headers['Authorization'] = "JWT ";
            axiosInstance.post('api/user/create/', {
                "username": form.username,
                "email": form.email,
                "password": form.password
            }).then((res)=>{
                return res;
            })
        } catch (error){
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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

export default SignupPage;