localStorage.clear();

var favPhotos = ["Assets/images/Solar_eclipse.jpg","Assets/images/andromeda_galaxy.jpg",
"Assets/images/spiral-nebula.jpg","Assets/images/Black_hole_friday.jpg",
"Assets/images/earth_and_moon.jpg","Assets/images/the_whirlpool_galaxy.jpg",
"Assets/images/starFormation.jpg","Assets/images/magnetic_monster.jpg",
"Assets/images/Black_hole_friday.jpg"];


var lastfavPhotos = favPhotos;

if (!localStorage.getItem("lastFavPhotos")) {

  localStorage.setItem("lastFavPhotos", JSON.stringify(favPhotos));
}

lastFavPhotos = JSON.parse(localStorage.getItem("lastFavPhotos"));


$('.fa-heart').click(function (e) {
  e.preventDefault()

var favImage=$(this).parent().parent().prev().prev().prev().children().find('img').attr('src');

// var favimg=favImage.substring(21,favImage.length-1);

  if (!lastFavPhotos.includes(favImage)) {
  lastFavPhotos.splice(lastFavPhotos.length - 1, 1);
  // lastFavPhotos.splice(0, 0, (result));
  lastFavPhotos.splice(0, 0, (favImage));
  localStorage.setItem("lastFavPhotos", JSON.stringify(lastFavPhotos));

  }
  
    displayFavPhotos();

});


displayFavPhotos();

function displayFavPhotos() {
  for (i = 1; i <= lastFavPhotos.length; i++) {

      $("#fav-" + i).find("img").attr("src", lastFavPhotos[i - 1]);
     
      $("#fav-" + i).find("a").attr("onclick","window.open('"+lastFavPhotos[i - 1].replace("thumb", "orig")+"')");

  }

}