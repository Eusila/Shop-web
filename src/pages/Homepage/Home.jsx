import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
    <div className="Container">
      <div className="content">
        <h1>Jackets for the Modern Man</h1>
        <br />
        <button className="btn1">Discovery Now</button>
      </div>
      <div className="arrivals">
        <h3>New Arrivals</h3>
        <div className="ac">
          <h5>Women</h5>  <h5>Men</h5>
          <h5>Accessories</h5> <h5>Bags</h5>
        
        </div>
        <div className="img">  <img src="./s.png" alt="" /></div>
      </div>
    </div>
  


    </>
);} 
export default Home;
