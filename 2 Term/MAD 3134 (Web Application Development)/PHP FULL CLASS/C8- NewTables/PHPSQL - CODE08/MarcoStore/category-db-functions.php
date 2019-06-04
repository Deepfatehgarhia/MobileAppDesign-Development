<?php include("header.php");
      include("db-connect.php");

function listCategories($conection) {
  $categories = array();
  $resultSet = mysqli_query($conection, "select * from categories");
  while($category = mysqli_fetch_assoc($resultSet)) {
      array_push($categories,$category);
   }
   return $categories;
}

?>
