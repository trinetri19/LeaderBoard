import react from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './user.css'

const AddUser = () => {
    const [user,setUser] = useState([]);
    const [newUser, setNewUser] = useState('');
    const navigate = useNavigate();
    
      const fetchUser = async () => {
            const res = await axios.get(`${process.env.VITE_APP_BASE_API}/leader/user`);
            setUser(res.data);
        }

    const addnewUser = async () => {
        if (!newUser.trim()) return;
        await axios.post(`${process.env.VITE_APP_BASE_API}/leader/user`, { name: newUser });
        setNewUser('');
        fetchUser();
        navigate('/select')
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
                <button onClick={(e)=> {e.preventDefault(); addnewUser();}} >
                    Add User
                </button>
            </form>
        </div>
    )
}
export default AddUser