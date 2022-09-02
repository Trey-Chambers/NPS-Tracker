import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { apiKey } from "../../apiKey";
import "./FeaturedPark.css";

/*
"data": [
{
"id": "77E0D7F0-1942-494A-ACE2-9004D2BDC59E",
"url": "https://www.nps.gov/abli/index.htm",
"fullName": "Abraham Lincoln Birthplace National Historical Park",
*/
export const FeaturedPark = () => {
  const [parks, setParks] = useState([]);
  const [randomPark, setRandomPark] = useState({});

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?${apiKey}`)
      .then((response) => response.json())
      .then((parkData) => {
        const selectAPark =
          parkData.data[Math.floor(Math.random() * parkData.data.length)];
        setRandomPark(selectAPark);

        setParks(parkData.data);
      });
  }, []);

  return (
    <>
    
      <h2> Featured Park </h2>
      <section className="featured_park">
        <div className="park-each" key={randomPark?.id}>
          <h2 className="card-title"> {randomPark?.fullName}</h2>
          <img 
          src={randomPark?.data?.images[0].url} width="50" height="50"
          alt={randomPark?.data?.images[0]?.caption}
          ></img>
          <p className="randomPark-description"> {randomPark?.description}</p>
        </div>
      </section>
      <button onClick={() => navigate("/parks/allparks")}>View more parks</button>
    </>
  );
};
