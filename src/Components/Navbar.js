import React from "react"
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate ('/login', {
            replace : true
        })
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link
                        className = 'navbar-brand'
                        to ="/"
                    >
                        Movie App
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup0">
                        <div class="navbar-nav">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/top10">
                                Top 10
                            </Link>
                            <Link className="nav-link" to="/Trending">
                                Trending
                            </Link>
                        </div>
                    </div>
                    <ul className = "navbar-collapse justify-content-end">
                        <Link 
                            className="nav-link" 
                            to="/login"
                            onClick = {handleLogout}
                        >
                            Logout
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )

}




