import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Users.css';

const Users = () => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
        setLoading(false);
    };

    useEffect( ()=>{
        fetchUsers();
    },[]);

    
    if(loading){
        return <h1>loading...</h1>
    }

    return ( 
        <React.Fragment>
            <div className="container">
                <h1>Users Page</h1>
                <ul className="list-group mb-4 mt-4 grid">
                    {users.map(user=>(
                        <li key={user.id} className="list-group-item mb-4">
                           <Link to={`/users/${user.id}`}> {user.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment> 
    );
}
 
export default Users;