let articleData = [];

// interogation de l'api

fetch ("http://localhost:3000/api/products")
    .then((rawData) => rawData.json())
    .then((jsonData) => {
        // les données de l'api viennent d'être recues
       let articlesList = jsonData
        console.log(articlesList);
        // affichages des articles
        articlesList.forEach(element => {
            articleDisplay(element.name, element.imageUrl, element.description, element._id, element.altTxt);

        });
    });
/**
 * fonction articleDisplay
 * 
 * affiche grafiquement un article proposé a la vente (un modèle de kanapé)
 */
function articleDisplay (kanapModelName, kanapImgUrl, KanapDescription, kanapId, kanapAltTxt) {
    let sectionHtml = document.getElementById("items");

    // ajouts des liens

    let aHtml = document.createElement("a");
    sectionHtml.appendChild(aHtml);

    let articleHtml = document.createElement("article")
    aHtml.setAttribute ("href","./product.html?id=" + kanapId);
    aHtml.appendChild(articleHtml);
    

    // ajouts des images

    let imgHtml = document.createElement("img");
    articleHtml.appendChild(imgHtml);
    imgHtml.src = kanapImgUrl;
   imgHtml.setAttribute('alt', kanapAltTxt);

    // ajouts des titres 

    let h3Html = document.createElement("h3");
    h3Html.className = "productName";
    h3Html.textContent = kanapModelName;
    articleHtml.appendChild(h3Html);

    // ajouts des prix

    let pHtml = document.createElement("p");
    pHtml.className = "productDescription";
    pHtml.textContent = KanapDescription;
    articleHtml.appendChild(pHtml) 
}












