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

function insertProduct($conection, $name, $price, $description) {
    $query = "insert into product (name, price, description) values ('{$name}', {$price}, '{$description}')";
    return mysqli_query($conection, $query);
}

function removeProduct($conection, $id) {
    $query = "delete from product where id = {$id}";
    return mysqli_query($conection, $query);
}

?>
