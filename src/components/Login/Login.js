import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import LoginMain from './LoginMain'
import './Login.css'


const Login = () => {
//   setTimeout({
//      alert('login page')
//   },3000)
  return (
    <div>
        <div className='main'>
        <i class="fa-brands fa-instagram" id="insta-logo"></i>
        <p>from</p>
        <div className='meta-header'> 
                <i class="fa-brands fa-meta" id="meta-logo"></i>
            <span> Meta</span>
        </div>
        </div>
    </div>
  )
}

export default Login
