if(typeof(Storage)!=="undefined"){
  var coruser = new Array('User1','User2','User3');
  var corpass = new Array('pass1','pass2','pass3');







function user(){

 var  users =  document.getElementById('username').value;

for(var i=0; i<coruser.length;i++){


      if(users == coruser[i])
      {

        document.getElementById('title').innerHTML = "Welcome :" + (localStorage.getItem("coruser")[i]);

      }
    }

}




function clicked(){


  loggeduser = document.getElementById("username").value;
  loggedpassword = document.getElementById('password').value;





                var arryuserlength=JSON.parse(localStorage.getItem('coruser'));
              var   arrypasslength=JSON.parse(localStorage.getItem('corpass'));
                for(var i=0; i<arryuserlength.length;i++)
                {
                      if(loggeduser == arryuserlength[i])

                      {
                        if(loggedpassword == arrypasslength[i])
                        {




                  window.alert("You have logged in as "+ coruser[i]);
                    window.open("fundTransfer.html");

                      window.close("index.html");
                      setTimeout('self.close()',10);
              }
              else{
                win]
                 window.alert("incorrect username or password!");
              }
            }

      }


}





function logout(){

   setTimeout('self.close()',10);
  window.open("index.html","_blank");

}



}
