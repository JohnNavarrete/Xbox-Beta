var Logo343 = document.getElementById("Logo343");
var LogoBet = document.getElementById("LogoBet");
var LogoAct = document.getElementById("LogoAct");
var LogoBli = document.getElementById("LogoBli");
var LogoEA = document.getElementById("LogoEA");
var LogoXG = document.getElementById("LogoXG");
var Perfil = document.getElementById("perfil");

const image = document.createElement('img')


Logo343.onclick = function(){
    console.log("BACKGROUND CAMBIADO A 343");
    document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/xbox-beta-e0cce.appspot.com/o/halo-infinite-master-chief-uhdpaper.com-8K-10.jpg?alt=media&token=3ca4f307-3478-4259-bb7b-e2159df39db8')";
}

LogoBet.onclick = function(){
    console.log("BACKGROUND CAMBIADO A BET");
    document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/xbox-beta-e0cce.appspot.com/o/starfield.jpg?alt=media&token=99ee7636-ebf9-4c0c-ac98-ac358e7291b2')";
}

LogoAct.onclick = function(){
    console.log("BACKGROUND CAMBIADO A ACT");
    document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/xbox-beta-e0cce.appspot.com/o/e53604a7b1ac017d84f7fd5d3c0b3d05.jpg?alt=media&token=e2d5a166-3b4a-490a-90e5-18ba44bc972d')";
}

LogoBli.onclick = function(){
    console.log("BACKGROUND CAMBIADO A BLI");
    document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/xbox-beta-e0cce.appspot.com/o/cropped-1920-1080-1158428%20(1).png?alt=media&token=9c5c0678-8c9d-441f-b0c5-4b387d8dde6f')";
}

LogoEA.onclick = function(){
    console.log("BACKGROUND CAMBIADO A EA");
    document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/xbox-beta-e0cce.appspot.com/o/ea.jpg?alt=media&token=9cdbb083-21bf-442f-a28a-0dd7160a2ea7')";
}

LogoXG.onclick = function(){
    console.log("BACKGROUND CAMBIADO A GX");
    document.body.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/xbox-beta-e0cce.appspot.com/o/gamepass.jpg?alt=media&token=c5857118-a0e0-40e1-be65-f89e8a9a4f13')";
}

const p = document.createElement("p");

Perfil.onclick = function(){
    console.log("PERFIL SELECCIONADO");
    p.innerHTML = "Mr wevudo32";
    document.getElementById("name").appendChild(p);
}