<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");

$name = $_GET["name"];
$price = $_GET["price"];
$conection = mysqli_connect('localhost', 'root', '', 'MarcoStore');

if(insertProduct($conection, $name, $price)) { ?>

    <p class="text-success"> Product <?= $name; ?>, <?= $price; ?> added with success! </p>

<?php } else { $msg = mysqli_error($conection); ?>

    <p class="text-danger"> The Product <?= $name; ?> does not been added ! </p>

<?php } ?>

<?php include("footer.php"); ?>
