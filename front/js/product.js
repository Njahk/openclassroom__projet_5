let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let productid = urlParams.get("id")

// interogation de l'api

fetch (`http://localhost:3000/api/products/${productid}`)
    .then((rawData) => rawData.json())
    .then((jsonData) => {

        // les données de l'api viennent d'être recues
      
        let productData = jsonData
        // affichages des informations
      
        productDisplay(productData.imageUrl, productData.altTxt, productData.name, productData.price, productData.description
            , productData.colors
            );

            

});


function productDisplay(kanapImgUrl, kanapAltTxt, productName, productPrice, productDescription, productColors){
    let divImgHtml= document.getElementsByClassName ("item__img")[0];

    //ajout de l'image

    let imgHtml = document.createElement("img");
        divImgHtml.appendChild(imgHtml);
        imgHtml.src = kanapImgUrl;
        imgHtml.setAttribute('alt', kanapAltTxt);

    //ajout des nom des kanapés

    let h1ProductNameHtml = document.getElementById("title");
        h1ProductNameHtml.textContent = productName

    //ajout des prix

    let spanProductPriceHtml = document.getElementById("price");
        spanProductPriceHtml.textContent = productPrice

    //ajout de la description

    let pProductDescriptionHtml = document.getElementById("description");
        pProductDescriptionHtml.textContent = productDescription

    //recuperation des couleurs 

    let sectionProductColor = document.getElementById("colors");

    //ajout des couleurs

    productColors.forEach((color) => {
        let option = document.createElement("option");
        option.value = color
        option.textContent = color
        sectionProductColor.appendChild(option);
});

}

let buttonHtml = document.getElementById("addToCart")

if (buttonHtml != null){
    buttonHtml.addEventListener("click", (e) => {
        let color = document.querySelector("#colors").value 
        let quantity = document.querySelector("#quantity").value
        
        if(color == null || color === "" || quantity == null || quantity == 0){
            alert("choisisez une couleur et une quantité")
        }

        let data = {
            productid: productid,
            color: color,
            quantity: Number (quantity),
            price: price
        }
        localStorage.setItem (productid, JSON.stringify(data))
        window.location.href = "cart.html"

    })
      
}
