

const form = document.querySelector(".form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const sectionProducts = document.querySelector("#products");
const btn = document.getElementById("#total")

const products = [];

form.onsubmit = (e) => {
    e.preventDefault();
    products.push({
        title: title.value,
        price: price.value,

    });

    newProducts();



    title.value = "";
    price.value = "";
};

function creatNode(title,price) {
    let div = document.createElement("div");
    div.classList.add("product");

    let titleP = document.createElement("p");
    let priceP = document.createElement("p");

    titleP.innerText = title;
    priceP.innerText = price;

    div.append(titleP,priceP);
    sectionProducts.append(div);


    
}

function newProducts() {
    sectionProducts.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        creatNode(products[i].title,products[i].price);
        
    }

    
}
btn.onclick = () => {
    let sum = 0;
    if (products.length == 0) {
        alert("Напиши продукт")

        
    }else{
        for (let i = 0; i < products.length; i++) {
            sum += +products[i].price;
            
        }
        alert("Итого" +sum);
    };
};