let backgrounds = `url(../img/background-`;
let app = document.getElementsByClassName(`main`)[0];
let arr = [`black`, 'red'];
let i = 0;

let start = setInterval(function(){
    i++;
    if (i == 4){
        i = 1;
    }
    console.log(i);
    app.style.background = backgrounds + `${i}.png) no-repeat center 60%/cover`;
    app.style.transition= `2s`;
}, 10000)