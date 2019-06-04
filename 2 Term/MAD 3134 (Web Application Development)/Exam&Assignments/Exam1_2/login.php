<?php

  session_start();

   $username='';
   $password='';
   $errors= array();


   // define($DB_SERVER, 'localhost:3036');
   // define($DB_USERNAME, 'root');
   // define($DB_PASSWORD, 'Bakhshl@2');
   // define($DB_DATABASE, 'northwind');
   // $db = mysqli_connect($DB_SERVER,$DB_USERNAME,$DB_PASSWORD,$DB_DATABASE);

   $con = mysqli_connect('localhost','root','Bakhshl@2');
    mysqli_select_db($con,'northwind');

   // reisgter button pressed

   if(isset($_POST['reg_user'])){
     $username=mysqli_real_escape_string($_POST['username']);
     $password=mysqli_real_escape_string($_POST['password']);
     $cnfpassword=mysqli_real_escape_string($_POST['cnfpassword']);
echo "hello database";

//checking fields
     if(empty($username))
      {
        array_push($errors,"Username is empty.");
      }
      if(empty($password))
       {
         array_push($errors,"password is required.");
       }
       if(empty($cnfpassword))
        {
          array_push($errors,"confirm password required.");
        }

        if($password != $cnfpassword)
         {
           array_push($errors,"Password  must be same.");
         }
        // first check the database to make sure
         // a user does not already exist with the same username and/or email
         $user_check_query = "SELECT * FROM dbusers WHERE username='$username' LIMIT 1";
         $result = mysqli_query($db, $user_check_query);
         $user = mysqli_fetch_assoc($result);

         if ($user) { // if user exists
           if ($user['username'] === $username) {
             array_push($errors, "Username already exists");
           }




      if(count($errors)==0){
        $sql= "INSERT INTO dbusers(username,password,type)
                            values('$username',$password',"R")";

        mysqli_query($db,$sql);
      }

   }
}

?>
<html lang = "en">

   <head>
      <title>Login Form</title>

    <link rel="stylesheet" type="text/css" href="css/login.css">

   </head>

   <body>

      <h2>Admin Console</h2>

      <div class = "container">

         <form class = "form-signin" role = "form"
            action = "login.php" method = "post">
            <h4 class = "form-signin-heading"><?php echo $msg; ?></h4>
            <input type = "text" class = "form-control"
               name = "username" placeholder = "EmailID"
               required autofocus></br></br>
            <input type = "password" class = "form-control"
               name = "password" placeholder = "password" required></br>
            <button aling="center" class = "form-control" type = "submit"
               name = "login">Login</button></br></br>
               <a href="#"> Lost your Password?</a></br></br>
             <a href="register.php"> Don't have account? Sign up here.</a>
         </form>

      <!-- ///   Click here to clean <a href = "logout.php" tite = "Logout">Session. -->

      </div>
      <script type="text/javascript" src="js/main.js"></script>
   </body>
</html>
