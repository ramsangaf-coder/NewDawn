// =======================
// Daily Quotes
// =======================

const quotes = [

{
text:"The future belongs to those who believe in the beauty of their dreams.",
author:"Eleanor Roosevelt"
},

{
text:"Success is not final. Failure is not fatal. Courage to continue is what counts.",
author:"Winston Churchill"
},

{
text:"Education is the passport to the future.",
author:"Malcolm X"
},

{
text:"Dream big and dare to fail.",
author:"Norman Vaughan"
},

{
text:"Small steps every day become big achievements.",
author:"Unknown"
},

{
text:"Learning never exhausts the mind.",
author:"Leonardo da Vinci"
},

{
text:"Discipline is choosing what you want most over what you want now.",
author:"Unknown"
}

];

const today = new Date();

const index = today.getDate() % quotes.length;

document.getElementById("quoteText").textContent = quotes[index].text;
document.getElementById("quoteAuthor").textContent = "- " + quotes[index].author;
document.getElementById("todayDate").textContent = today.toDateString();

// =======================
// Theme Switch
// =======================

const themeButton = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light");

themeButton.innerHTML="☀️";

}

themeButton.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeButton.innerHTML="☀️";

localStorage.setItem("theme","light");

}else{

themeButton.innerHTML="🌙";

localStorage.setItem("theme","dark");

}

};

// ======================
// Mouse Glow
// ======================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// ======================
// Typing Effect
// ======================

const message="Beyond The Horizon Lies Our Next Chapter";

let i=0;

function typing(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

// =======================
// Counter Animation
// =======================

function counter(id,target){

let value=0;

const speed=Math.max(1, Math.ceil(target/60));

const timer=setInterval(()=>{

value+=speed;

if(value>=target){

value=target;

clearInterval(timer);

}

document.getElementById(id).innerHTML=value+"+";

},25);

}

counter("students",15,true);
counter("teachers",3,true);
counter("year",2025,false);
counter("courses",4,true);

// =========================
// Scroll Reveal
// =========================

const revealElements = document.querySelectorAll(
".mission, .timeline, .founder-section, .about, .explore, .numbers"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>observer.observe(el));

// ==========================
// Navbar Scroll Effect
// ==========================

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.style.padding="14px 30px";

navbar.style.background="rgba(5,5,10,.82)";

}else{

navbar.style.padding="18px 35px";

navbar.style.background="rgba(15,15,20,.55)";

}

});

// ======================
// Register Form
// ======================

document
.getElementById("registerForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank you for registering with New Dawn!");

this.reset();

});

