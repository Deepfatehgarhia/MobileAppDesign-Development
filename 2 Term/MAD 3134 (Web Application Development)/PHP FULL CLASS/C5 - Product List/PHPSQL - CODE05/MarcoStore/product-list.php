<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");
?>

<table class="table table-striped table-bordered">
<?php
$products = listProducts($conection);
foreach ($products as $product) :
?>
  <tr>
    <td><?= $product["name"]  ?></td>
    <td><?= $product["price"] ?></td>
  </tr>
<?php
   endforeach
?>
</table>

<?php include("footer.php"); ?>
