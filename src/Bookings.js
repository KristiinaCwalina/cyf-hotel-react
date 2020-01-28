import React from "react";
import Search from "./Search.js";
 //import SearchResults from "./SearchResults.js";
 import FakeBookings from "./data/fakeBookings.json";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};


const SearchResults=()=>{
  return(
  <table>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>First name</th>
      <th>Surname</th>
      <th>Email</th>
      <th>Room id</th>
      <th>Check-in</th>
      <th>Check-out</th>
    </tr>
  </table>
  )
}

const Bookings = () => {

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
       
      </div>
    </div>
  );
};

export default Bookings;
