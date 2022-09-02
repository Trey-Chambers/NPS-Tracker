import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./JournalList.css";

export const JournalEntryList = () => {
    const [entries, setEntries] = useState([])
    const [filteredEntries, setFiltered] = useState([])
   
    const navigate = useNavigate()
    const localUser = localStorage.getItem("nps_user")
    const NPSUserObject = JSON.parse(localUser)  


    useEffect(
        () => {
            fetch(`http://localhost:8088/journalEntries?_expand=user`)

            .then(response => response.json())
            .then((entryArray) => {
                const myEntries = entryArray.filter(entry => entry.userId === NPSUserObject.id)
                setFiltered(myEntries)

            })
            
        },
        [] // When this array is empty, you are observing initial component state
    )

   
    return <>
      <h2>List of entries</h2>
      <button onClick={() => navigate("/trip/create")}>Create Trip</button>
    <article className="trips">
        
        {
            
            filteredEntries.map(
                (entry) => {
                    return <section className="trip">
                        <p>{entry?.user?.name}</p>
                        <p>{entry.content}</p>
                    </section>
                }
            )
        }
    </article>
    </>
  
}