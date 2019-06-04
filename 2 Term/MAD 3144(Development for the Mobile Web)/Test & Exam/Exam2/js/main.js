if(typeof(Storage)!=="undefined"){


function user(){

 var  users =  JSON.parse(localStorage.getItem('corpass'));

for(var i=0; i<coruser.length;i++){


      if(users === coruser[i])
      {

        document.getElementById('usertitle').innerHTML = "Welcome :" + (localStorage.getItem("coruser")[i]);

      }
    }
}




function clicked(){
  var coruser = new Array('User01','User02');
  var corpass = new Array('pass1','pass2');



  var corpassword = JSON.parse(localStorage.getItem('corpass'));

  for(var i=0; i<coruser.length;i++){
  //  if (corpassword[i]!==corpass[i]) {
      if((localStorage.getItem("corpass") === null)||(localStorage.getItem("corpass") === null)){
      localStorage.setItem('coruser',JSON.stringify(coruser));
      //


      localStorage.setItem('corpass',JSON.stringify(corpass));


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

                     window.alert("incorrect username or password!");
                  }
                }

          }

    }
  else{
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

                 window.alert("incorrect username or password!");
              }
            }

      }


}
}

}





function logout(){

   setTimeout('self.close()',10);
  window.open("index.html","_blank");

}



}
