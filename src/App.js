import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading/>
      <TouristInfoCards/>
      <Bookings />
      <Restaurant/>
      <Footer address={data}/>
     
    </div>
  );
};
const Heading=()=>{
  return (
<header className="App-header" ><h4>CYF Hotel</h4><img className="App-logo"src="https://image.flaticon.com/icons/svg/139/139899.svg"/></header>
  )
}

const TouristInfoCards=()=>{
  return(
    <div className="container">
      <div className="row">
        <div className ="column">
  <div className="card">
	<img src="https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="card-img-top" />
	<div className="card-body">
		<a href="https://peoplemakeglasgow.com/" className="btn btn-primary" target="blank">Glasgow</a>
	</div>
  </div>

</div>
<div className ="column">
  <div className="card">
	<img src="https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2" className="card-img-top" />
	<div className="card-body">
		<a href="https://www.visitmanchester.com/" className="btn btn-primary" target="blank">Manchester</a>
	</div>
</div>
</div>

<div className ="column">
  <div className="card">
	<img src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg" className="card-img-top" />
	<div className="card-body">
		<a href="https://www.visitlondon.com/" className="btn btn-primary" target="blank">London</a>
	</div>
</div>
</div>

</div>
</div>
)


}
const data= ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

const Footer=(props)=>{
  const address=props.data
  return(
    <div className="footer">
<ul>
  {data.map((line, i)=>(<li key={line + i}>{line}</li>))}
</ul>
</div>
  )
}



export default App;
