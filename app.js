function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Viewportas ir kamuoliuko random judejimas.
let intViewportHeight = window.innerHeight - 100;
let intViewportWidth = window.innerWidth - 100;

const rut = document.querySelector('.rutuliukas');

function go() {
    rut.style.left = rand(0, intViewportWidth) + 'px';
    rut.style.top = rand(0, intViewportHeight) + 'px';
}

//Kamuoliuko išnykimas ir atsiradimas.

rut.addEventListener('click', function(){
    rut.style.display = 'none';
});

//Fono ir kamuoliuko skaiciuokliai
//Kamuoliukas

const kamuoliukuRezDiv = document.querySelector('span');
let rezultatas = 0;
kamuoliukuRezDiv.innerText = rezultatas;

rut.addEventListener('click', function() {
    kamuoliukuRezDiv.innerText = rezultatas++;
})

//Fonas

const fonoRezDiv = document.querySelector('.antras');
let rezultatas2 = 0;
fonoRezDiv.innerText = rezultatas2;

document.querySelector('body').addEventListener('click', function(){
    fonoRezDiv.innerText = rezultatas2++;
})

//Resetas

const mygtukas = document.querySelector('button');

mygtukas.addEventListener('click', function(){
    rut.style.display = 'inline';
    if(rut.style.display = 'inline'){
        rezultatas2--;
    }
});



setInterval(go, 1000);
go();