import React,{useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import './Login.css'


const Login = () => {
  
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
      
      navigate('/LoginMain')
      
    },2000)  
  },[])

  
  return (
    <div>
        <div className='main' >
        <i className="fa-brands fa-instagram" id="insta-logo" ></i>
        <p>from</p>
        <div className='meta-header'> 
                <i className="fa-brands fa-meta" id="meta-logo"></i>
            <span> Meta</span>
        </div>
        </div>
    </div>
  )
}

export default Login
