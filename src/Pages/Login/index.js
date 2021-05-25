import React, {useState} from 'react'
import Layout from '../../Components/Layout'
import './index.css'
import {useHistory} from "react-router-dom" 

export default function Login() {
    const history = useHistory();

    const loginEmail="kelvin@gmail.com";
    const loginPassword="1234567";
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if (loginEmail === email && loginPassword === password) {
            history.push('/add')
        }
        else{
            console.log("email or password not correct");
        }
    }

    return (
        <Layout>
            <div className='loginContainer'>
              <div className="loginForm">
                <form>
                  <h2 className="loginTitle">Login</h2>
                  <br/>
                  <br/>
                  <p>Email:</p>
                  <input className="loginInput"
                    onChange={handleEmail}
                    type="text"
                    placeholder = "example@example.com"
                    value={email}
                  />
                  <br/>
                  <br/>
                  <p>Password:</p>
                  <input className="loginInput"
                    onChange={handlePassword}
                    type="password"
                    placeholder = "*********"
                    value={password}
                  />
                  <br/>
                  <br/>
                  <br/>
                  <button className="loginButton" type='submit' onClick={handleSubmit}>
                    Login
                  </button>
                </form>
              </div>
            </div>
        </Layout>
    )
}
