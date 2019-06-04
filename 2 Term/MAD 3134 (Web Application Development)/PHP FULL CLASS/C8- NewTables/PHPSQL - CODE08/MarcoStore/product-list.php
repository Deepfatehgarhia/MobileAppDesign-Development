<?php include("header.php");
      include("db-connect.php");
      include("product-db-functions.php");
?>
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
    <td><?= substr($product["description"], 0, 10) ?></td>
    <td><?= $product["category_name"]?></td>
    <td>
      <!-- We have to change this line of code as now we are working with POST -->
      <!-- <a href=remove-product.php?id=product[id] class=text-danger>remove</a>-->
      <!-- Let's use the form to send data -->
      <form action="remove-product.php" method="post">
        <input type = "hidden" name ="id" value="<?=$product['id']?>">
        <button class="btn btn-danger">remove</button>
      </form>
    </td>
  </tr>
<?php
   endforeach
?>
</table>

<?php include("footer.php"); ?>
