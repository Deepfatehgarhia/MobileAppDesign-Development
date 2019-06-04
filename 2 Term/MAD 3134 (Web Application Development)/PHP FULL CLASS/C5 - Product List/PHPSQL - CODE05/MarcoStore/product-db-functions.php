<?php include("header.php");
      include("db-connect.php");

function listProducts($conection) {
  $products = array();
  $resultSet = mysqli_query($conection, "select * from product");
  while($product = mysqli_fetch_assoc($resultSet)) {
      array_push($products,$product);
   }
   return $products;
}

function insertProduct($conection, $name, $price) {
    $query = "insert into product (name, price) values ('{$name}', {$price})";
    return mysqli_query($conection, $query);
}
?>
