import { useState } from "react";
import { ParkList } from "./ParkList";
import { ParkSearch } from "./ParkSearch";
//parent component that maintains state--- siblings not allowed to talk directly
export const ParkContainer = () => {
  const [searchTerms, setSearchTerms] = useState("");

  return (
    <>
      <ParkSearch setterFunction={setSearchTerms} /> 
      <ParkList searchTermState={searchTerms} />
    </>
  );
};
