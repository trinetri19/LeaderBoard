import react from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Leader.css'
const LeaderBoard = () => {
    const [user, setUser] = useState([]);

    const fetchUser = async () => {
        const res = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/leader/user`);
        setUser(res.data);
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div className="mainDiv">
            <h1> LeaderBoard &#127942;</h1>
             <ul>
                {user.map((user,index)=>{
                    return (
                        <li key={user._id} className='list'>Rank : {index + 1 }  {user.name} points {user.points}</li>
                    )
                })}
             </ul>

             <Link to = "/newUser" className='link'> &#128073; Want to Add New User!</Link>
        </div>
    )
}
export default LeaderBoard