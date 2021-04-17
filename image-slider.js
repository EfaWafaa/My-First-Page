var imageCounter = 1;
 
showDivs(imageCounter);
 
function changeImage(n) {
    showDivs(imageCounter += n);
}
 
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[imageCounter - 1].style.display = "block";
}
