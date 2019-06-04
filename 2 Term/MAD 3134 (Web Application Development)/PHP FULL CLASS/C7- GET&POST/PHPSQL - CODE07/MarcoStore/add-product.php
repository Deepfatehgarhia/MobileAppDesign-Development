<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");

$name        = $_POST["name"];
$price       = $_POST["price"];
$description = $_POST["description"];

$conection = mysqli_connect('localhost', 'root', '', 'MarcoStore');

if(insertProduct($conection, $name, $price, $description)) { ?>

    <p class="text-success"> Product <?= $name; ?>, <?= $price; ?> added with success! </p>

<?php } else { $msg = mysqli_error($conection); ?>

    <p class="text-danger"> The Product <?= $name; ?> does not been added ! </p>

<?php } ?>

<?php include("footer.php"); ?>
