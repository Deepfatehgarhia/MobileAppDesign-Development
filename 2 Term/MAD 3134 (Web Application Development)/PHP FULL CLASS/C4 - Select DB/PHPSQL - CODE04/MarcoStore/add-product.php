<?php include("header.php"); ?>

<?php

$name = $_GET["name"];
$price = $_GET["price"];
$conection = mysqli_connect('localhost', 'root', '', 'MarcoStore');

function insertProduct($conection, $name, $price) {
    $query = "insert into product (name, price) values ('{$name}', {$price})";
    return mysqli_query($conection, $query);
}

if(insertProduct($conection, $name, $price)) { ?>

    <p class="text-success"> Product <?= $name; ?>, <?= $price; ?> added with success! </p>

<?php } else { $msg = mysqli_error($conection); ?>

    <p class="text-danger"> The Product <?= $name; ?> does not been added ! </p>

<?php } ?>

<?php mysqli_close($conection); ?>

<?php include("footer.php"); ?>
