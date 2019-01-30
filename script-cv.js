var x = 0;

window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page
deplacement=window.scrollY - (window.innerHeight-document.body.offsetHeight);
// Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});


//function myFunction() {
 // document.getElementById("demo").innerHTML = x += 1;
 
/*window.scrollY // Valeur d u scroll en pixel	
document.body.offsetHeight // Hauteur totale de la page en pixel
window.innerHeight // Hauteur de l'écran en pixel	*/					