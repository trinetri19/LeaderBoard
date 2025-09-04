import react from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './user.css'

import server from '../../environment';

const AddUser = () => {
    const [user,setUser] = useState([]);
    const [newUser, setNewUser] = useState('');
    const navigate = useNavigate();
    
      const fetchUser = async () => {
            const res = await axios.get(`${server}/user`);
            setUser(res.data);
        }

    const addnewUser = async (e) => {
        e.preventDefault();
        console.log(newUser)
        if (!newUser.trim()) return;
        const res = await axios.post(`${server}/user`, { name: newUser });
        setNewUser('');
        fetchUser();
        navigate('/')
    }
    useEffect(()=>{
        fetchUser();
    },[])
    return (
        <div className="userDiv">
            <h2>Add User</h2>
            <form className='userForm'>
                <label>Enter Name : </label>
                <input type="text" placeholder='Enter Here' value={newUser}
                    onChange={(e) => setNewUser(e.target.value.toUpperCase())} ></input>
                <button onClick={ addnewUser} >
                    Add User
                </button>
            </form>
        </div>
    )
}
export default AddUser