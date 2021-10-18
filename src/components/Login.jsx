import React, { useRef, useState } from 'react'
import { useAuth } from "../contexts/authContext"
import { auth } from "../firebase"

function Login() {
    const { login, currentUser } = useAuth();
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    

    const  submitHandler = async(e)=> {
        e.preventDefault()
        try {
            setError("")
            await login(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            setError("Failed")
        }
    }

    return (
        <div>
            {currentUser && <div>{currentUser.email}</div>}
            {error && <div>{error}</div>}
            <form onSubmit={submitHandler}>
                <label htmlFor="">email</label>
                <input ref={emailRef} type="text" />

                <label htmlFor="">password</label>
                <input ref={passwordRef} type="text" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
