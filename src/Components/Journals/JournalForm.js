import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const JournalForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [entry, update] = useState({
        content: "",
        userId: 0,
        timestamp:0

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the journal list
    */
   const navigate = useNavigate()

    const localUser = localStorage.getItem("nps_user")
    const NPSUserObject = JSON.parse(localUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        const date = Date.now()
        const journalEntryToSendAPI = {
 
            userId:NPSUserObject.id,
            content:entry.content,
            timestamp: date
        }
    


        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/journalEntries`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(journalEntryToSendAPI)
        })
        
        .then(response => response.json())
        .then(() => {
            navigate("/trips")

        })
    }

    return (
        <form className="journalForm">
            <h2 className="journalForm__title">New Journal Entry</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Describe your experience"
                        value={entry.content}
                        onChange={
                            (event) => {
                                const copy = {...entry}
                                copy.content = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button  
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit
            </button>
                </form>
    )
}
