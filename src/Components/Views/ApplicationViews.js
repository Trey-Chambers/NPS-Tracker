import { Route, Routes } from "react-router-dom"
import { JournalForm } from "../Journals/JournalForm"
import { JournalEntryList } from "../Journals/JournalList"
import { FeaturedPark } from "../Parks/FeaturedPark"
import { ParkContainer } from "../Parks/ParkContainer"
import { ParkList } from "../Parks/ParkList"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>parks</h1>
                    
                    
                    
                </>
            }/>
            <Route path="/parks/allparks" element={ <ParkContainer />} />
            <Route path="/parks" element={ <FeaturedPark />} /> 
            <Route path="/trips" element={ <JournalEntryList /> } />
            <Route path="/trip/create" element={ <JournalForm /> } />
            


               
                
                
            
        </Routes>
    )
}