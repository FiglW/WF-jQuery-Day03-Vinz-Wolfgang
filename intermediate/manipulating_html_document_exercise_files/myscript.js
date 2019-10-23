$(".product-image:has([src^='notebook'])").addClass("notebooks");
$(".product-image:has([src^='phone'])").addClass("phones");
$(".product-image:has([src^='tablet'])").addClass("tablets");

$(".notebooks").css({"background-color": "red"});
$(".tablets").css({"background-color": "green"});
$(".phones").css({"background-color": "blue"});