import React, {Component}from "react";

class Restaurant extends Component  {
  constructor(props){
    super(props);
    this.state={
      count: 0,
    orders: 0
      
    }
  };

  
  render(){
  const pizzas = 0;
  
  return(
    <div className= "orderList">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza"/>
        <Order orderType="Salads"/>
      </ul>
    </div>
  );
}};

export const RestaurantButton=(props)=>{
  return(
    <button className="btn btn-primary" onClick={props.order}>Add</button>
  )
}

export class Order extends Component {

  constructor(props){
    super(props)

    this.state={
      orders: 0 
    }
  };


  render(){
    return (
          <li>
            {this.props.orderType}: {this.state.orders} <RestaurantButton order={this.AddOrder}/>
          </li>
    )
  }
  
  AddOrder=()=>{
    this.setState(previousState => {
      return {
        orders: previousState.orders + 1
      };
    });
  }
}
export default Restaurant;
