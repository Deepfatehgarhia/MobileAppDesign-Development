function clicked() {

  var user = document.getElementById('username');
  var pass = document.getElementById('password');


  var coruser = "test";
  var corpass = "123";

  if(user.value == coruser)
  {
    if(pass.value == corpass)
    {
        window.alert("You are Logged in as "+ user.value);
        window.open("fundTransfer.html");

    }
    else{

       window.alert("incorrect username or password!");
    }
  } else {

    window.alert("incorrect username or password!");
  }

}
