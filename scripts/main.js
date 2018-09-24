//get modal element
var popup = document.getElementById('fenetrepopup');
var modal = document.getElementsByClassName('modal');
var modalcontent = document.getElementsByClassName('modalcontent');
// get close button
var closebutton = document.getElementsByClassName('closebutton')[0];
// get OK button
var site = document.getElementsByClassName('site');

//Function pour l'apparition
modal = function() {
  fenetrepopup.style.display = 'block';
  modal.style.display = 'block';
  setTimeout(modal, 3000);
}

// Function pour fermer
closebutton.openclick = function(){
  modal.style.display = 'none';
  popup.style.display = 'none';
}
console.log(closebutton)
// Function pour ouvrir l'autre fenetre
site.openclick = function (){
  openLink('https://bettermotherfuckingwebsite.com');
}
