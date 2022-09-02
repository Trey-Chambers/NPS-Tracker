import { useEffect, useState } from "react";
import { apiKey } from "../../apiKey";
import "./ParkList.css";

/* 
How to filter the parks array by designation in fetch call? and

How do i make results appear in multiple pages rather than one long list? "paginiation"??

How to access information with the same names e.g. "images" & " addresses"?
*/

export const ParkList = ({ searchTermState }) => {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([])

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?${apiKey}`)
      .then((response) => response.json())
      .then((parks) => {
        setParks(parks.data);
      });
  }, []);





  useEffect(() => {
    if(searchTermState){
      const searchedParks = parks.filter(park => { 
        return park.fullName.toLowerCase().startsWith(searchTermState.toLowerCase())
      })
      setFilteredParks(searchedParks)
      

    }else{
      setFilteredParks(parks)
    
    }

  },  [searchTermState, parks])
   
 
console.log(filteredParks.filter(singlePark => singlePark.designation === "National Park"))
   

  // let parksArray =parks.filter(singlePark => singlePark.designation === "National Park")

  return (
    <>
      {filteredParks.filter(singlePark => singlePark.designation === "National Park").map((park) => {
         return (
          <section className="park-each" key={`park--${park.id}`}>
            <h2 className="card-title">{park?.fullName}</h2>

            <div className="card-address">
               <p>{park?.addresses[0].line1}</p>
               <p>{park?.addresses[0].city}, {park?.addresses[0].stateCode}</p>

            </div>
            <p className="Park-description">{park?.description}</p>
            {/* <p>{park?.images.map(image => {
              return (
                <img src={image.url} width="50" height="50"></img>
              )
            })}</p> */}
          </section>
        );
      })}
    </>
  );
};
