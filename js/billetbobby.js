/*
code = prompt("Entrez le mot de passe: 'Bobby',s'il vous plaît.(Ce site est en période de tests)");
if (code !== "Bobby")
{
    location.href="erreur.html";//ici c'est la page où est redirigé le visiteur qui entre le mauvais mot de passe
}
*/

function imgSlider(anything){
    document.getElementById("slider").src = anything;
}

//========================//
//© 2021 Vincent Lefebvre //
//========================//

let currentYear = new Date().getFullYear();
let c = document.querySelector(".copyright");
c.innerText = "© " + currentYear + " Vincent lefebvre";
