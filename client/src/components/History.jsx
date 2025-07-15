import react from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import './history.css'

const History =()=>{
    const [history,setHistory] = useState([])
    const [user,setUsers] = useState([]);

     const fetchUsers = async () => {
      const res = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/api/users`);
      setUsers(res.data);
  };

    const fetchHistory =async  ()=>{
      const res = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/leader/history`);
      setHistory(res.data)
    }
    useEffect(()=>{
        fetchHistory();
        fetchUsers();
    },[])

    return (
        <div className='mainDiv'>
             <h1>Points Claimed By Users</h1>
             {history.map((his)=>{
                return(
                    <p className='list'>User Name : {his.userId.name} , Points : {his.userId.points} , 
                    Claimed At : {new Date(his.claimedAt).toLocaleString()}</p>
                )
             })}
        </div>
    )
}
export default History;
