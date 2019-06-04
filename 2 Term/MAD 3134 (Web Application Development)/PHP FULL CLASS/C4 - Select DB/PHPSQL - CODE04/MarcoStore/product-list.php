<?php include("header.php"); ?>
<?php include("db-connect.php"); ?>

<?php

$resultSet = mysqli_query($conection, "select * from product");

while($product = mysqli_fetch_assoc($resultSet)) {
    echo $product['name'] . "<br/>"; }

?>

<?php include("footer.php"); ?>
