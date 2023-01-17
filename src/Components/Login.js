import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: '' })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleLogin(user)
        navigate('/main')
    }


    return (
        <main className="form-signin w-25 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="username..." name="username" onChange={handleChange}/>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                
                <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
                <button className="w-100 btn btn-lg btn-primary mt-2" onClick={() => navigate("/register")}>Sign up</button>
            </form>
        </main>

    )
}

export default Login