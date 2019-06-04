if(typeof(Storage)!=="undefined"){
function changepass(){



  var coruser = JSON.parse(localStorage.getItem('coruser'));
  var corpass = JSON.parse(localStorage.getItem('corpass'));


    var lUser= document.getElementById("UserN").value
    var oldPassword = document.getElementById("oldP").value

    var newPassword = document.getElementById("newP").value
    var confirmPassword = document.getElementById("confirmP").value


    for(var i=0; i<coruser.length;i++)
    {
        if(lUser == coruser[i])
          {
            if(oldPassword!==""&&newPassword!==""&&confirmP!=="")
            {
              if(oldPassword!==newPassword)
              {
                if(newPassword==confirmPassword)
                {
                  corpass.forEach(function(item, index, array)
                  {
                    if(index == i)
                      {
                        var abc = JSON.parse(localStorage.getItem('corpass'));

                          abc[i]=confirmPassword;
                         localStorage.setItem('corpass',JSON.stringify(abc));
                        window.alert("password upadted");
                      }
                      else{
                          item = item;
                      }});
                   }else{
                     window.alert("Your New password doesnot match, please enter correct password.")
                   }
            }else{
              window.alert("Your New password and Old password can not be same.")
            }
          }
        }
      }
}
function resetForm()
{
        var oldPassword=document.getElementById("oldPassword").value="";
        var newPassword=document.getElementById("newPassword").value="";
        var confirmPassword =document.getElementById("confirmPassword").value="";
}

function logout(){

   setTimeout('self.close()',10);
  window.open("index.html","_blank");

}
}
