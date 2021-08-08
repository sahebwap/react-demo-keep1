import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import bckvid from './sample3.mp4'
import LoginForm from './loginform';
import Footer from './footer.jsx'
import Docs from './dosc';
import Features from './features';
import Todo from './Todo'


const headerStyle = {
  color:"red"
}

ReactDOM.render(
  <div>

  <Header/>
  <video autoPlay loop muted style={{position:"absolute",
  height:"250%",
  width:"100%",
  objectFit:"cover",
  transform:"translate(-50%,-50%)",top:"50%",left:"50%",bottom:"0",zIndex:"-1"}} className="fullscreen">
    <source src={bckvid} type="video/mp4"/>
  </video>
  <div id="title"><Navbar/></div>
  <br/>
  <div style={{backgroundColor:"#8860d0",
  width:"30%",
  marginLeft:"65%",
  marginRight:"10%",
  opacity:"0.9",
  borderRadius:"20px"
}}><LoginForm/></div>
<br/>
<div id="docs" style={{heigh:"150px",width:"100%"}}>
<Docs/>
</div>
<br/>
<div id="Features"><Features/></div>
<br/>
<div id="todo" style={{alignItems:"center"}}>
<Todo/>
</div>

<br/>
<Footer/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
