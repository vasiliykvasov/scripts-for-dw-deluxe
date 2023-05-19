/* Скрипт для получения всех идентификаторов товаров в разделе в шаблоне DW Deluxe */
let productSkuList = document.querySelectorAll(".productList .sku");
console.log(document.querySelector("h1").innerText);
console.log("{");
for (let productSku of productSkuList) {
console.log(productSku.dataset.productId);
}
console.log("}");
