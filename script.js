window.addEventListener("scroll", ()=>{
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const imageDiv1 = document.querySelector(".imageDiv1");
const youtubeDiv1 = document.querySelector(".youtubeDiv1");
const mapDiv1 = document.querySelector(".mapDiv1");

const viewButton1 = document.querySelector(".viewButton1");
const youtubeButton1 = document.querySelector(".youtubeButton1");
const photoButton1 = document.querySelector(".photoButton1");

photoButton1.addEventListener("click", ()=>{
        imageDiv1.style.display = "block";
        youtubeDiv1.style.display = "none";
        mapDiv1.style.display = "none";
});

viewButton1.addEventListener("click", ()=>{
    imageDiv1.style.display = "none";
    youtubeDiv1.style.display = "none";
    mapDiv1.style.display = "block";
});

youtubeButton1.addEventListener("click", ()=>{
    imageDiv1.style.display = "none";
    youtubeDiv1.style.display = "block";
    mapDiv1.style.display = "none";
});


const imageDiv2 = document.querySelector(".imageDiv2");
const youtubeDiv2 = document.querySelector(".youtubeDiv2");
const mapDiv2 = document.querySelector(".mapDiv2");

const viewButton2 = document.querySelector(".viewButton2");
const youtubeButton2 = document.querySelector(".youtubeButton2");
const photoButton2 = document.querySelector(".photoButton2");

photoButton2.addEventListener("click", ()=>{
    imageDiv2.style.display = "block";
    youtubeDiv2.style.display = "none";
    mapDiv2.style.display = "none";
});

viewButton2.addEventListener("click", ()=>{
    imageDiv2.style.display = "none";
    youtubeDiv2.style.display = "none";
    mapDiv2.style.display = "block";
});

youtubeButton2.addEventListener("click", ()=>{
    imageDiv2.style.display = "none";
    youtubeDiv2.style.display = "block";
    mapDiv2.style.display = "none";
});


const imageDiv3 = document.querySelector(".imageDiv3");
const youtubeDiv3 = document.querySelector(".youtubeDiv3");
const mapDiv3 = document.querySelector(".mapDiv3");

const viewButton3 = document.querySelector(".viewButton3");
const youtubeButton3 = document.querySelector(".youtubeButton3");
const photoButton3 = document.querySelector(".photoButton3");

photoButton3.addEventListener("click", ()=>{
    imageDiv3.style.display = "block";
    youtubeDiv3.style.display = "none";
    mapDiv3.style.display = "none";
});

viewButton3.addEventListener("click", ()=>{
    imageDiv3.style.display = "none";
    youtubeDiv3.style.display = "none";
    mapDiv3.style.display = "block";
});

youtubeButton3.addEventListener("click", ()=>{
    imageDiv3.style.display = "none";
    youtubeDiv3.style.display = "block";
    mapDiv3.style.display = "none";
});


const imageDiv4 = document.querySelector(".imageDiv4");
const youtubeDiv4 = document.querySelector(".youtubeDiv4");
const mapDiv4 = document.querySelector(".mapDiv4");

const viewButton4 = document.querySelector(".viewButton4");
const youtubeButton4 = document.querySelector(".youtubeButton4");
const photoButton4 = document.querySelector(".photoButton4");

photoButton4.addEventListener("click", ()=>{
    imageDiv4.style.display = "block";
    youtubeDiv4.style.display = "none";
    mapDiv4.style.display = "none";
});

viewButton4.addEventListener("click", ()=>{
    imageDiv4.style.display = "none";
    youtubeDiv4.style.display = "none";
    mapDiv4.style.display = "block";
});

youtubeButton4.addEventListener("click", ()=>{
    imageDiv4.style.display = "none";
    youtubeDiv4.style.display = "block";
    mapDiv4.style.display = "none";
});


const imageDiv5 = document.querySelector(".imageDiv5");
const youtubeDiv5 = document.querySelector(".youtubeDiv5");
const mapDiv5 = document.querySelector(".mapDiv5");

const viewButton5 = document.querySelector(".viewButton5");
const youtubeButton5 = document.querySelector(".youtubeButton5");
const photoButton5 = document.querySelector(".photoButton5");

photoButton5.addEventListener("click", ()=>{
    imageDiv5.style.display = "block";
    youtubeDiv5.style.display = "none";
    mapDiv5.style.display = "none";
});

viewButton5.addEventListener("click", ()=>{
    imageDiv5.style.display = "none";
    youtubeDiv5.style.display = "none";
    mapDiv5.style.display = "block";
});

youtubeButton5.addEventListener("click", ()=>{
    imageDiv5.style.display = "none";
    youtubeDiv5.style.display = "block";
    mapDiv5.style.display = "none";
});

const heardButton = document.querySelector(".heardButton");
const likeButton = document.querySelector(".likeButton");
const like = document.querySelector(".like");

heardButton.addEventListener("click", ()=>{
    heardButton.classList.toggle("displayBlock");
    likeButton.classList.toggle("displayNone");
    like.innerText = "999 Likes";
});

likeButton.addEventListener("click", ()=>{
    heardButton.classList.toggle("displayBlock");
    likeButton.classList.toggle("displayNone");
    like.innerText = "1000 Likes";
});