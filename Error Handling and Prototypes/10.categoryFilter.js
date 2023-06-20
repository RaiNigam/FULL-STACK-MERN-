function filterByCategory(products){
        function filter(category){
           return products.filter(product=>product.category==category);
    }
 
}
var products=[
    {name:"Shirt",category:"Clothing"},
    {name:"Pant",category:"Clothing"},
    {name:"Hat",category:"Accessories"},
    {name:"Sunglasses", category:"Accessories"}
];
let clothingProducts=filterByCategory(products)("Clothing");
console.log(clothingProducts);
