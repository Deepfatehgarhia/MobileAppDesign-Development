<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");

$id = $_GET["id"];
removeProduct($conection,$id);
// Code to support auto-refresh ... When I've used Location I have to use "die")
header("Location: product-list.php?removed=true");
die();
?>

<p class="text-success"> The Product <?=$id?> removed ! </p>

<?php include("footer.php"); ?>
