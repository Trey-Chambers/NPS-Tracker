import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Register = (props) => {
    const [user, setUser] = useState({
        username: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("nps_user", JSON.stringify({
                        id: createdUser.id,
                        name:createdUser.name,
                        username: createdUser.username,
                        password: createdUser.password
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8088/users?username=${user.username}`)
        .then((res) => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate username. No good.
                    window.alert("Account with that username already exists")
                }
                else {
                    // Good username, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                <fieldset>
                    <label htmlFor="name"> name </label>
                    <input onChange={updateUser}
                        type="name" id="name" className="form-control"
                        placeholder="name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input onChange={updateUser}
                           type="text" id="username" className="form-control"
                           placeholder="Enter your username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="Password" required />
                </fieldset>
                
                
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}