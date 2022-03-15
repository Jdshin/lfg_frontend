import {useState, useEffect} from 'react';
import axiosInstance from '../axiosApi';
import { backend_url, protectedEP } from '../strings/strings';


function ProtectView(props){

    const [message, setMessage] = useState("");

    const getProtectView = () => {
        try {
            axiosInstance.get(backend_url + protectedEP).then((res) => {
                setMessage(res.data.hello);
            })
            return message;
        } catch (error){
            throw error;
        }
    }

    useEffect(()=>{getProtectView()});

    return <h1>{message}</h1>
}

export default ProtectView;

