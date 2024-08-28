let imgElement=document.getElementById("myimg");

let images=["img/back3.jpg", "img/back4.jpeg", "img/back6.jpeg"];

let i = 0;
function slideShow() {
    imgElement.setAttribute('src',images[i]);
    if(i == images.length - 1)
    {
        i=0;
    }
    else {
        i++;
    }
    setTimeout(function(){
        slideShow();
    },4000)
}
slideShow();