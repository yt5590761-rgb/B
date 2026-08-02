// Photo slideshow
let photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
];

let index = 0;

setInterval(() => {
    index++;

    if(index >= photos.length){
        index = 0;
    }

    document.getElementById("pic").src = photos[index];

}, 3000);


// Birthday surprise button
function party(){

    // Candle blow effect
    document.querySelector(".candle").innerHTML = "💨🕯️";

    setTimeout(()=>{
        document.querySelector(".candle").innerHTML = "✨";
    },1000);


    // Fireworks
    for(let i=0; i<30; i++){

        let fire = document.createElement("div");

        fire.className = "fire";
        fire.innerHTML = "🎆";

        fire.style.left = Math.random()*100 + "%";
        fire.style.top = Math.random()*100 + "%";

        document.body.appendChild(fire);


        setTimeout(()=>{
            fire.remove();
        },2000);
    }


    // Confetti
    for(let i=0; i<50; i++){

        let confetti = document.createElement("div");

        confetti.className = "confetti";
        confetti.innerHTML = "🎊";

        confetti.style.left = Math.random()*100 + "%";
        confetti.style.animationDuration =
        (2 + Math.random()*3) + "s";

        document.body.appendChild(confetti);


        setTimeout(()=>{
            confetti.remove();
        },5000);
    }


    // Hearts
    for(let i=0; i<20; i++){

        let heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "%";

        document.body.appendChild(heart);


        setTimeout(()=>{
            heart.remove();
        },5000);
    }

}