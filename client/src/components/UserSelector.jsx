import react from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import './userSelect.css'

import { useNavigate } from 'react-router-dom';

const UserSelector = () => {
    const [user, setUser] = useState([]);
    const [selectedUser,setSelectedUser] = useState('');
    const navigate = useNavigate();

    const fetchUser = async () => {
        const res = await axios.get("http://localhost:8080/leader/user");
        setUser(res.data);
       if(res.data.length > 0) setSelectedUser(res.data[0]._id);
    }
    useEffect(()=>{
          fetchUser()
    },[])
    const claimPoints = async ()=>{
        if(!selectedUser) return;
        const res = await axios.post(`http://localhost:8080/leader/claim/${selectedUser}`)
        fetchUser();
        navigate('/leader');
    }
    return (
        <div className="selectDiv">
            <h1>Select User!</h1>
            <div className='userList'>
                <select value={selectedUser} onChange={(e)=> setSelectedUser(e.target.value)}>
                    {user.map((user) => {
                        return (
                       <option key={user._id} value={user._id}> {user.name} points : {user.points} &#127941;</option>
                        )
                    })} 
                </select>
                <button onClick={claimPoints}> Claim Points </button>
            </div>
        </div>


    )
}
export default  UserSelector;