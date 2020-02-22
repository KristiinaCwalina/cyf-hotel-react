import React, {Component} from "react";

class Search extends Component {
  constructor(props){
    super(props);
    this.state ={
      searchInput: ""
    };
  }
  handleSearchInput=(event)=>{
  
     this.setState({searchInput: event.target.value});
    }
  
    render(){
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={(event)=>{ this.props.search(event,this.state.searchInput)}}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
              value={this.state.searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer Id"
                onChange={this.handleSearchInput}
              />
             <Button/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
};
const Button=()=>{
  return(
<button className="btn btn-primary">Search IDs</button>
  )}

export default Search;
