import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/authContext"


function Dashboard() {
    const { logout, currentUser } = useAuth();
    return (
        <div>
            <div> Dashborad</div>
            {currentUser && currentUser.email}
            { currentUser ?
                (<button onClick={logout}>Log out</button>):
                (<Link to="/login"><button>Login</button></Link>)
            }
        </div>
    )
}

export default Dashboard
