let queryString = window.location.search
let urlParams = new URLSearchParams(queryString)
let productid = urlParams.get("id")

console.log({productid});


// interogation de l'api

fetch (`http://localhost:3000/api/products/${productid}`)
    .then((rawData) => rawData.json())
    .then((jsonData) => {

        // les données de l'api viennent d'être recues
      
        let productData = jsonData
        console.log(productData);
       console.log(productData.price);
        // affichages des informations
      
        productDisplay(productData.imageUrl, productData.altTxt, productData.name, productData.price);

            

});


function productDisplay(kanapImgUrl, kanapAltTxt, productName, productPrice){
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

    let spanPruductPriceHtml = document.getElementById("price");
    spanPruductPriceHtml.textContent = productPrice


}

      

