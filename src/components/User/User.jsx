import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({match}) => {

    const userId = match.params.id;
    const [user,setUser]= useState({
        address:{},
        company:{}
    });
    const [loading,setLoading] = useState(false);

    useEffect( ()=>{
        const fetchUser = async () => {
            setLoading(true);
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId }`);
            setUser(res.data[0]);
            setLoading(false);
        };
        fetchUser();
    },[]);

    const {id, name,email,phone,website,address,company} = user;

    if(loading){
        return <h1>loading...</h1>
    }

    return ( 
        <React.Fragment>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{address.street}, {address.suite}. <span>{address.city}</span></p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{phone}</li>
                <li className="list-group-item">{website}</li>
                <li className="list-group-item">{email}</li>
            </ul>
            <div className="card-body">
                <Link to="/users">See All Users...</Link>
            </div>
            </div>
        </React.Fragment>
     );
}
 
export default User;