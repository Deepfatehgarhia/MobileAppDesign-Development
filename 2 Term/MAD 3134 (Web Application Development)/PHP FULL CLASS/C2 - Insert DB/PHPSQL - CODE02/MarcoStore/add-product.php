<?php include("header.php"); ?>

<?php

$name = $_GET["name"];
$price = $_GET["price"];
$query = "insert into product (name, price) values ('{$name}', {$price})";
/*$conection = mysqli_connect('localhost', 'root', '', 'MarcoStore');*/

if(mysqli_query($conection, $query)) { ?>

    <p class="alert-success"> Product <?= $name; ?>, <?= $price; ?> added with success! </p>

<?php } else { ?>

    <p class="alert-danger"> Product <?= $name; ?> does not been added ! </p>

<?php } ?>

<?php mysqli_close($conection); ?>

<?php include("footer.php"); ?>
