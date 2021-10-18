import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth"
const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    
    
    function signup(email, password){

        return createUserWithEmailAndPassword(auth, email,password)
    }
    
    function login(email, password){
        
        return signInWithEmailAndPassword(auth, email,password)
    }

    async function logout(){
        
        return await signOut(auth)
    }

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged( user =>{
        setCurrentUser(user)
    })

    return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}


