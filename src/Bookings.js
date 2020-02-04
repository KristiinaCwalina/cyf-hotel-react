import React, { Component } from "react";
import Search from "./Search.js";
//import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};


const SearchResults = (props) => {
  return (
    <table>
      <tr className="table table-bordered" >
        <th>Id</th>
        <th>Title</th>
        <th>First name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room id</th>
        <th>Check-in</th>
        <th>Check-out</th>
        <th>Total stay</th>
      </tr>
      {props.results.map((booking) => {
        const dateA = moment(booking.checkOutDate);
        const dateB = moment(booking.checkInDate);

        console.log('DateA', dateA)
        console.log('DateA', dateB)
        const totalStay = dateA.diff(dateB, 'days');
        return <Row booking={booking} total={totalStay} />

      })}
    </table>
  )
}
class Row extends Component {
  state={
    isHighlighted: false
  }

  highlight = () => {
    this.setState(previousState => {
      return {
        isHighlighted: !previousState.isHighlighted
      };
    });
  }
  
  render() {
    const classNames=`table table-bordered ${this.state.isHighlighted ? "table-primary" : ""}`

    return (
      <tr className= {classNames} onClick={this.highlight}>
        <td>{this.props.booking.id}</td>
        <td>{this.props.booking.title}</td>
        <td>{this.props.booking.firstName}</td>
        <td>{this.props.booking.surname}</td>
        <td>{this.props.booking.email}</td>
        <td>{this.props.booking.roomId}</td>
        <td>{this.props.booking.checkInDate}</td>
        <td>{this.props.booking.checkOutDate}</td>
        <td>{this.props.total}</td>
      </tr>
    )

  }
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
