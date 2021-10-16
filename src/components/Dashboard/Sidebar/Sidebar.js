import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
// import logo from "../../../resources/images/logos/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faPlus, faBook, faBookMedical, faMagnet, faListUl } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Topbar/Topbar';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {/* <li>
                    <Link to="/home" className="text-dark">
                        <img className="img-fluid w-50 ml-5" src={logo} alt="" />
                    </Link>
                </li> */}
            {/* <Topbar/> */}
                <li>
                    <Link to="/dashboard" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Members List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBook" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookList" className="text-dark">
                        <FontAwesomeIcon icon={faBook} /> <span>Book List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/issueBook" className="text-dark">
                        <FontAwesomeIcon icon={faBookMedical} /> <span>Issue Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageIssue" className="text-dark">
                        <FontAwesomeIcon icon={faListUl} /> <span>Manage Issue</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageReview" className="text-dark">
                        <FontAwesomeIcon icon={faMagnet} /> <span>Manage Review</span>
                    </Link>
                </li>
            </ul>
        </div>

    );
};

export default Sidebar;