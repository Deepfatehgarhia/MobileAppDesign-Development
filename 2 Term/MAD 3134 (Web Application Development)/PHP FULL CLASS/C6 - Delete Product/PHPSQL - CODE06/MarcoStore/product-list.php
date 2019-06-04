<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");
?>
<!-- Code to support the logic that comes to previous page -->
<?php if (array_key_exists("removed", $_GET) && $_GET["removed"]==true) { ?>
  <p class ="alert-success"> Product removed ! </p>
<?php  } ?>

<table class="table table-striped table-bordered">
<?php
$products = listProducts($conection);
foreach ($products as $product) :
?>
  <tr>
    <td><?= $product["name"]  ?></td>
    <td><?= $product["price"] ?></td>
    <td>
      <a href="remove-product.php?id=<?=$product['id']?>" class="text-danger">remove</a>
    </td>
  </tr>
<?php
   endforeach
?>
</table>

<?php include("footer.php"); ?>
