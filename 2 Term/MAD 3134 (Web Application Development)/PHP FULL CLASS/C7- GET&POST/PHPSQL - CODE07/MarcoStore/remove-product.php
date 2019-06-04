<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");

// Let's change the method GET to POST
$id = $_POST["id"];
removeProduct($conection,$id);
header("Location: product-list.php?removed=true");
die();
?>

<p class="text-success"> The Product <?=$id?> removed ! </p>

<?php include("footer.php"); ?>
