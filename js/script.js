let app = document.getElementsByClassName(`main`)[0];
let backgrounds = {
    path:`url(../img/`,
    style:') no-repeat center 60%/cover',
    images:[
        `background-1.png`,
        `background-2.png`,
        `background-3.png`
    ],
    currentImage:1
}
let backgroundChange = setInterval(function(){
    if (backgrounds.currentImage == backgrounds.images.length){
        backgrounds.currentImage = 0;
    }
    app.style.background = backgrounds.path + backgrounds.images[backgrounds.currentImage]+backgrounds.style;
    app.style.transition= `2s`;
    backgrounds.currentImage++;
}, 5000)