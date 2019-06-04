<?php include("header.php"); ?>

<?php
$name = $_GET["name"];
$price = $_GET["price"];
?>
<p class="alert-success">
    Product <?= $name; ?>, <?= $price; ?> added with sucess!
</p>

<?php include("footer.php"); ?>
