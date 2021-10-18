import React, { useRef, useState } from 'react'
import { useAuth,currentUser } from "../contexts/authContext"

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const signupRef = useRef()
    const { currentUser, signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value != passwordConfirmRef.current.value){
            return setError("Password mismatched")
        }

        try {
            setError("")
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            
        } catch(error){
            setLoading(false)
            setError("Failed")
        }
        setLoading(false)
    }

    return (
        <>
            <div>
                {
                    error && ( <p>{error}</p>)
                }
                {currentUser && (currentUser.email)}
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="text" ref={emailRef} />

                    <label htmlFor="" >Password</label>
                    <input type="text" ref={passwordRef} />

                    <label htmlFor="" >Confirm Password</label>
                    <input type="text" ref={passwordConfirmRef} />
                    <button disabled={loading} >Sign up</button>
                </form>
                {loading && <div>loading..</div>}
            </div>
        </>
    )
}

export default SignUp
