import React, { Component } from "react";
import Search from "./Search.js";
//import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";
import Input from "./Input";

const SearchResults = props => {
  return (
    <table>
      <tr className="table table-bordered">
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
      {props.results.map(booking => {
        const dateA = moment(booking.checkOutDate);
        const dateB = moment(booking.checkInDate);

        console.log("DateA", dateA);
        console.log("DateA", dateB);
        const totalStay = dateA.diff(dateB, "days");
        return <Row booking={booking} total={totalStay} />;
      })}
    </table>
  );
};
class Row extends Component {
  state = {
    isHighlighted: false
  };

  highlight = () => {
    this.setState(previousState => {
      return {
        isHighlighted: !previousState.isHighlighted
      };
    });
  };

  render() {
    const classNames = `table table-bordered ${
      this.state.isHighlighted ? "table-primary" : ""
    }`;

    return (
      <tr className={classNames} onClick={this.highlight}>
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
    );
  }
}

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: null,
      errorMessage: null,
      firstName: "",
      surname: "",
      title: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    };
  }

  search = (event, searchVal) => {
    event.preventDefault();
    console.log(searchVal);
  };
  componentDidMount() {
    fetch("https://cyf-react.glitch.me/")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then(result => {
        this.setState({ bookings: result });
      })
      .catch(response =>
        response
          .json()
          .then(error => this.setState({ errorMessage: error.error }))
      );
  }
  newCustomer = e => {
    e.preventDefault();
    this.setState(lastState => {
      return {
        bookings: [
          ...lastState.bookings,
          {
            firstName: lastState.firstName,
            surname: lastState.surname,
            title: lastState.title,
            email: lastState.email,
            roomId: lastState.roomId,
            checkInDate: lastState.checkInDate,
            checkOutDate: lastState.checkOutDate,
            id: lastState.bookings[lastState.bookings.length - 1].id + 1
          }
        ],
        firstName: "",
        surname: "",
        title: "",
        email: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: ""
      };
    });
  };
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <form onSubmit={this.newCustomer}>
            <Input
              label="First name"
              value={this.state.firstName}
              type="text"
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
            <Input
              label="Surname"
              required
              value={this.state.surname}
              type="text"
              onChange={event => this.setState({ surname: event.target.value })}
            />
            <Input
              label="Title"
              required
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
            <Input
              label="Email"
              required
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <Input
              label="Room Id"
              required
              value={this.state.roomId}
              onChange={event => this.setState({ roomId: event.target.value })}
            />
            <Input
              label="Check In Date"
              type="date"
              required
              value={this.state.checkInDate}
              onChange={event =>
                this.setState({ checkInDate: event.target.value })
              }
            />
            <Input
              label="Check Out Date"
              required
              type="date"
              required
              value={this.state.checkOutDate}
              onChange={event =>
                this.setState({ checkOutDate: event.target.value })
              }
            />

            <button>Submit</button>
          </form>

          <Search search={this.search} />
          {this.state.errorMessage !== null ? (
            this.state.errorMessage
          ) : this.state.bookings == null ? (
            "Loading..."
          ) : (
            <SearchResults results={this.state.bookings} />
          )}
        </div>
      </div>
    );
  }
}

export default Bookings;
