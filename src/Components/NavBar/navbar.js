import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



export const Navbar = () => {
    const navigate = useNavigate()
    const localUser = localStorage.getItem("nps_user")
    const NPSUserObject = JSON.parse(localUser)  

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/parks">Parks</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trips">Trips</Link>
            </li>
            
            {
                localStorage.getItem("nps_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("nps_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
