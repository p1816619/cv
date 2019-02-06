/*

window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page
deplacement=(window.scrollY - (window.innerHeight-document.body.offsetHeight))/window.innerHeight;
// Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});
*/

window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);
// Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});



/*
function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
      var scrollPercent =(window.scrollY/(scrollHeight - windowHeight))*100;

    window.scroll(0, value); // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
    console.log(0,value);
 }
 
 setInterval(function(){ myScroll(); },40);




/*
function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
      var scrollPercent =(scrollTop/(scrollHeight - windowHeight))*100;

    window.scroll(0, value); // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
    console.log(0,value);
 }



//function myFunction() {
 // document.getElementById("demo").innerHTML = x += 1;
 
/*window.scrollY // Valeur d u scroll en pixel	
document.body.offsetHeight // Hauteur totale de la page en pixel
window.innerHeight // Hauteur de l'écran en pixel	*/
