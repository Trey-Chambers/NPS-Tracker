import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./login.css"


export const Login = () => {
    const [username, setUsername] =useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("nps_user", JSON.stringify({
                        id: user.id,
                        username: user.username,
                        password: user.password
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>NPS Tracker</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputUsername"> Username </label>
                        <input type="username"
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                            className="form-control"
                            placeholder="username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}