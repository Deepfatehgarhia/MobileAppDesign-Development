<?php include("header.php");
      include("db-connect.php");

function listProducts($conection) {
  $products = array();
  $resultSet = mysqli_query($conection, "select p.*, c.name as category_name from product as p join categories as c on c.id = p.category_id");
  while($product = mysqli_fetch_assoc($resultSet)) {
      array_push($products,$product);
   }
   return $products;
}

function insertProduct($conection, $name, $price, $description, $category_id) {
    $query = "insert into product (name, price, description, category_id)
             values ('{$name}', {$price}, '{$description}', '{$category_id}')";
    return mysqli_query($conection, $query);
}

function removeProduct($conection, $id) {
    $query = "delete from product where id = {$id}";
    return mysqli_query($conection, $query);
}

?>
