import React from "react";

function LoginForm(){
  return <div class="container" style={{textAlign:"center",
  width:"90%",
  height:"40%",
  alignItems:"center",
  marginLeft:"5%",
  marginRight:"5%",
  opacity:"0.8"
}}>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1"></label>
    <input type="" class="form-control" id="fname" aria-describedby="fname" placeholder="First name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1"></label>
    <input type="" class="form-control" id="lname" aria-describedby="fname" placeholder="Last name"/>
  </div>
<div class="form-group">
  <label for="exampleInputEmail1"></label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
</div>
<div class="form-group">
  <label for="exampleInputPassword1"></label>
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>
<div class="form-group form-check">
</div>
<button type="submit" class="btn btn-outline-light btn-lg">Register</button>
</form>
  </div>;
}

export default LoginForm;
