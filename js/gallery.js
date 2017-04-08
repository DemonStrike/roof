var btn_next = document.querySelector ('#gallery .gallery-btn .gallery-btn-right');
var btn_prev = document.querySelector ('#gallery .gallery-btn .gallery-btn-left');

var images = document.querySelectorAll('#gallery .gallery-photos img');
var i = 0;

btn_next.onclick = function () {
    images[i].style.display = 'none';
    i++;
    
    if (i >=images.length) {
        i = 0;
    }
    
    images[i].style.display = 'block';
}

btn_prev.onclick = function () {
    images[i].style.display = 'none';
    i--;
    
    if (i <0) {
        i = images.length - 1;
    }
    
    images[i].style.display = 'block';
}