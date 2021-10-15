import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Topbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <a class="navbar-brand" href="#">Dashboard</a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/home">{loggedInUser.name}</Link>
                </li>
                </ul>
            </div>
            </nav>
    );
};

export default Topbar;