function createCompanyUsers(){


  var createCompanyUsers = {"CompanyUsers":{ "email":document.getElementById("emailid").value, "name":document.getElementById("name").value,"password":document.getElementById("password").value,"company":document.getElementById("company").value,"Phone":document.getElementById("phoneno").value}};
  localStorage.setItem(document.getElementById("emailid").value, JSON.stringify(createCompanyUsers));
  console.log(localStorage);

  // var retrievedObject = JSON.parse(localStorage.getItem('sukhminder@gmail.com'));
  // console.log('retrievedObject: ', retrievedObject);
  // console.log(retrievedObject["accountSummary"]);
  // retrievedObject["accountSummary"] = "data available";
  // console.log(retrievedObject["accountSummary"]);
}

function createSeekerUsers(){

  var createSeekerUsers = {"SeekerUsers":{  "firstname":document.getElementById("firstname").value,"lastname":document.getElementById("lastname").value,"email":document.getElementById("emailid").value,"password":document.getElementById("password").value,"Phone":document.getElementById("phoneno").value}};
  localStorage.setItem(document.getElementById("emailid").value, JSON.stringify(createSeekerUsers));
  console.log(localStorage);
  authenticate();
}


function authenticate() {


  var seeker = document.getElementById("0");
  var comapany = document.getElementById("1");

  if (seeker.checked){
                  var username = document.getElementById('username').value;
                  var enteredPassword = document.getElementById('password').value;
                  console.log("entered password"+enteredPassword);

                  console.log(username);
                  console.log("checking....");

                  var seekerdata = eval(createSeekerUsers);
                  console.log(seekerdata);
                  for (var key in seekerdata) {
                      if (data.hasOwnProperty(key)) { // this will check if key is owned by data object and not by any of it's ancestors
                          alert(key+': '+data[key]); // this will show each key with it's value


                if(localStorage.hasOwnProperty(SeekerUsers)){
                    var retrievedObject = JSON.parse(localStorage.getItem(SeekerUsers.firstname));
                     var  actualPassword = retrievedObject["password"];
                     console.log("actual password is "+ actualPassword);
                    if(enteredPassword.toString() == actualPassword) {
                          console.log("login successful");
                          alert("login successful");
                          console.log("sending data to account.js page");
                          localStorage.setItem('username',JSON.stringify( username));
                            window.location.href = "flyer.html";
                      }
                      else{
                              alert("incorrect password, try again");
                      }
                }

              else {
                          console.log("incorrect username,try again ")

                          alert("incorrect username");
                            window.location.href = "login.html";

                    }
            }}


  else if (comapany.checked) {

    var username = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;
    console.log("entered password"+enteredPassword);

    console.log(username);
    console.log("checking....");

    var seekerdata = eval(createSeekerUsers);
    console.log(seekerdata);
    for (var key in seekerdata) {
        if (data.hasOwnProperty(key)) { // this will check if key is owned by data object and not by any of it's ancestors
            alert(key+': '+data[key]); // this will show each key with it's value


  if(localStorage.hasOwnProperty(SeekerUsers)){
      var retrievedObject = JSON.parse(localStorage.getItem(SeekerUsers.firstname));
       var  actualPassword = retrievedObject["password"];
       console.log("actual password is "+ actualPassword);
      if(enteredPassword.toString() == actualPassword) {
            console.log("login successful");
            alert("login successful");
            console.log("sending data to account.js page");
            localStorage.setItem('username',JSON.stringify( username));
              window.location.href = "flyer.html";
        }
        else{
                alert("incorrect password, try again");
        }
  }

  else {
            console.log("incorrect username,try again ")

            alert("incorrect username");
              window.location.href = "login.html";
      }


      }
    }
  }

}




function cancel(){


  var seeker = document.getElementById("0");
  var comapany = document.getElementById("1");

  if (seeker.checked){
      window.location.href = "seekerSignUp.html";
  }else if (comapany.checked) {
      window.location.href = "ComapnySignUp.html";
  }

// var value=document.getElementById('radio').value;
//
// if(value==0)
// {
//   alert(value);
// }
// else{
//
//
//   }
}
