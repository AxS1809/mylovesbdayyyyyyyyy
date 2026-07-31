/* ==========================================
   MUSIC
========================================== */

const music = document.getElementById("music");

if (music) {
    music.volume = 0.35;

    document.addEventListener("click", () => {
        music.play().catch(() => {});
    }, { once: true });
}

/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {

    const hearts = ["❤️","💖","💕","🤍"];

    function createHeart(){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize = (18 + Math.random()*18) + "px";

        heart.style.animationDuration = (6 + Math.random()*5) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        },11000);

    }

    setInterval(createHeart,450);

}

/* ==========================================
   PHOTO SLIDESHOW
========================================== */

const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");

if(slideImage){

const slides=[

{
image:"assets/photos/photo7.jpg",
text:"The Cutestest Gurlll ❤️"
},

{
image:"assets/photos/photo8.jpg",
text:"The Prettiesttt Smileee 🌸"
},

{
image:"assets/photos/photo1.jpg",
text:"My mostestt Favouriteee Personnn 🤍"
},

{
image:"assets/photos/photo9.jpg",
text:"The Sweetestestst Soulll 💖"
},

{
image:"assets/photos/photo10.jpg",
text:"Myy Sunshineee ☀️"
},

{
image:"assets/photos/photo11.jpg",
text:"Alwaysss Beautifulll 🌸"
},

{
image:"assets/photos/photo2.jpg",
text:"My Safe Placee ❤️"
},

{
image:"assets/photos/photo15.jpg",
text:"Foreverr Amazingg ✨"
},

{
image:"assets/photos/photo1.jpg",
text:"A Smile I'll Neverr Forgett heheh 💕"
},

{
image:"assets/photos/photo14.jpg",
text:"Myy Happinessss ❤️"
},

{
image:"assets/photos/photo18.jpg",
text:"The Brightestt Smileee 🌸"
},

{
image:"assets/photos/photo13.jpg",
text:"Beautifull Insidee & Outtt 🤍"
},

{
image:"assets/photos/photo16.jpg",
text:"Onee In A Millionnn 💖"
},

{
image:"assets/photos/photo19.jpg",
text:"Makinggg myy Everyy Momentt betterr ❤️"
},

{
image:"assets/photos/photo12.jpg",
text:"myy favvvvv phototo"
},

{
image:"assets/photos/photo17.jpg",
text:"You Make Life Better ☀️"
},

{
image:"assets/photos/photo3.jpg",
text:"jusss sooo Perfecttt ❤️"
},

{
image:"assets/photos/photo6.jpg",
text:"Thankkk Youuu Forr Beinggg Youuu 💕"
},

{
image:"assets/photos/photo5.jpg",
text:"Happyyy 15th Birthdayyy Shayaaliii 🎂❤️"
}

];

let current = 0;

function nextSlide(){

slideImage.style.opacity="0";

slideCaption.style.opacity="0";

slideImage.style.transform="scale(.96)";

setTimeout(()=>{

current++;

if(current>=slides.length){

current=0;

}

slideImage.src=slides[current].image;

slideCaption.textContent=slides[current].text;

slideImage.style.opacity="1";

slideCaption.style.opacity="1";

slideImage.style.transform="scale(1)";

},700);

}

setInterval(nextSlide,2500);

}

/* ==========================================
   SCROLL REVEAL
========================================== */

const fadeItems=document.querySelectorAll(".memory,.ending,.letterCard");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

fadeItems.forEach(item=>{

item.classList.add("fade");

observer.observe(item);

});

/* ==========================================
   GIFT SURPRISE
========================================== */

const gift = document.getElementById("gift");
const surprise = document.getElementById("surprise");

if(gift){

gift.onclick = ()=>{

gift.style.transform="scale(1.3)";
gift.style.opacity="0";

setTimeout(()=>{

gift.parentElement.style.display="none";

surprise.style.display="block";

launchConfetti();

window.scrollTo({

top:0,

behavior:"smooth"

});

},600);

};

}

/* ==========================================
   CONFETTI
========================================== */

function launchConfetti(){

for(let i=0;i<200;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.animationDelay=Math.random()+"s";

piece.style.background=`hsl(${Math.random()*360},90%,70%)`;

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}