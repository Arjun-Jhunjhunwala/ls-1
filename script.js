let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let image = document.querySelector('.gallery-img');
let links = document.querySelectorAll('.link');

let i = 0;
var images = [];

images[0] = 'assets/image1.jpg';
images[1] = 'assets/image2.jpg';
images[2] = 'assets/image3.jpg';
images[3] = 'assets/image4.jpg';
images[4] = 'assets/image6.jpg';
images[5] = 'assets/image7.jpg';
images[6] = 'assets/image8.jpg';

function nextImg(){
    if (i<images.length-1){
        i++
    }else{
        i=0;
    }

    image.src = images[i];
}

function prevImg(){
    if (i>0){
        i--;
    }else{
        i=images.length-1;
    }

    image.src = images[i];
}

next.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg);

window.onload = function setImg(){
    image.src = images[i];
}

links.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})