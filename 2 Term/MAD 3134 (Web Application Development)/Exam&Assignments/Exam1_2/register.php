

<html>

   <head>
      <title>Registration Page</title>
      <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/login.css">

   </head>

   <body>

      <h2>Registration Page</h2>


      <div class = "container">
         <form method="post" class = "form-signin" action = "config.php" target="_blank">


            <input type = "text" class = "form-control"
               name = "username" placeholder = "EmailID" ></br></br>
            <input type = "password" class = "form-control"
               name = "password" placeholder = "password"></br>
               <input type = "password" class = "form-control"
                  name = "cnfpassword" placeholder = "Confirm Password" ></br>
            <input value="Register" aling="center" class = "form-control" type = "submit"
               name = "reg_user"></br></br>

             <a href="login.php"> Already have account? Sign IN</a>
         </form>

         <!-- Click here to clean <a href = "logout.php" tite = "Logout">Session. -->

      </div>

   </body>
</html>
