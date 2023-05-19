/* Скрипт для получения всех идентификаторов товаров в разделе в шаблоне DW Deluxe */
let productSkuList = document.querySelectorAll("#catalogSection .productList .sku");
console.log(document.querySelector("h1").innerText + " " + productSkuList.length);
console.log("{");
for (let productSku of productSkuList) {
console.log(productSku.dataset.productId);
}
console.log("}");
