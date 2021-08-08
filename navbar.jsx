import React from "react";

function Navbar(){
  return <div style={{width:"100%",top:"0",position:"absolute"}}>
  <div class="navbar">
          <div class="container flex">
              <h1 class="logo">Demo</h1>
              <nav>
                  <ul style={{listStyleType:"none"}}>
                      <li><a href="index.html" style={{textDecoration:"none"}}>Home</a></li>
                      <li><a href="#Features" style={{textDecoration:"none"}}>Features</a></li>
                      <li><a href="#docs" style={{textDecoration:"none"}}>Docs</a></li>
                      <li><a href="#todo" style={{textDecoration:"none"}}>Todo List</a></li>
                  </ul>
              </nav>
          </div>
      </div>
  </div>;
}

export default Navbar;
