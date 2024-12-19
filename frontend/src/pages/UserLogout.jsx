import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const navigate=useNavigate();
  const token=localStorage.getItem("token")
  useEffect(()=>{
  
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status===200){
            localStorage.removeItem('token');
            navigate("/login")
        }
    })
  },[token])
  return (
    <div>
      UserLogout    
    </div>
  )
}

export default UserLogout

