/* ==========================================
   NEW DAWN
   JavaScript Engine
========================================== */

// ================================
// Cached Elements
// ================================

const body = document.body;

const navbar = document.getElementById("navbar");

const themeToggle = document.getElementById("themeToggle");

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

const cursorGlow = document.querySelector(".cursor-glow");

// ================================
// Theme
// ================================

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

body.classList.add("light");

themeToggle.innerHTML="☀️";

}

themeToggle.addEventListener("click",()=>{

body.classList.toggle("light");

const light = body.classList.contains("light");

themeToggle.innerHTML = light ? "☀️" : "🌙";

localStorage.setItem(

"theme",

light ? "light" : "dark"

);

});


// ================================
// Navbar Scroll
// ================================

window.addEventListener("scroll",()=>{

navbar.classList.toggle(

"scrolled",

window.scrollY>50

);

});

// ================================
// Cursor Glow
// Desktop only
// ================================

if(window.innerWidth>992){

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

});

}else{

cursorGlow.style.display="none";

}

// ================================
// Scroll Reveal
// ================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
// ================================
// Typewriter Effect
// ================================
const typingMessage =
"Education • Entrepreneurship • Innovation • Technology • Shopping • Advertising";

const typingTarget =
document.getElementById("typingText");

let charIndex = 0;

function typeWriter(){

if(charIndex < typingMessage.length){

typingTarget.textContent += typingMessage.charAt(charIndex);

charIndex++;

setTimeout(typeWriter,35);

}

}

typeWriter();
// ================================
// Counter Animation
// ================================
function animateCounter(id,target){

let value=0;

const element=document.getElementById(id);

const step=Math.ceil(target/80);

const timer=setInterval(()=>{

value+=step;

if(value>=target){

value=target;

clearInterval(timer);

}

element.textContent=value+"+";

},20);

}

animateCounter("students",15);
animateCounter("teachers",3);

document.getElementById("year").textContent="2025";
// ================================
// Form Submission
// ================================
const form=document.getElementById("registerForm");

const modal=document.getElementById("successModal");

const closeModal=document.getElementById("closeModal");

form.addEventListener("submit",(e)=>{

e.preventDefault();

modal.classList.add("show");

form.reset();

});

closeModal.onclick=()=>{

modal.classList.remove("show");

};

window.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("show");

}

};

// ==========================
// Loader
// ==========================

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("loader")
.classList.add("hide");

},2500);

});

// ========================================
// 3D Glass Card Effect
// ========================================

const cards = document.querySelectorAll(

".about-card,.explore-card,.timeline-card,.founder-card,.register-box"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateX=((y-centerY)/18);

const rotateY=((centerX-x)/18);

card.style.transform=

`perspective(1200px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

// =====================================
// Magnetic Buttons
// =====================================

document.querySelectorAll(

".btn,.glass-btn,.hero-buttons button"

).forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/8;

const moveY=(y-rect.height/2)/8;

button.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

// ==========================================
// Premium Cursor
// ==========================================

const cursorDot=document.querySelector(".cursor-dot");
const cursorRing=document.querySelector(".cursor-ring");

window.addEventListener("mousemove",(e)=>{

cursorDot.style.left=e.clientX+"px";
cursorDot.style.top=e.clientY+"px";

cursorRing.style.left=e.clientX+"px";
cursorRing.style.top=e.clientY+"px";

});

document.querySelectorAll(

"a,button,.btn,.glass-btn,.about-card,.explore-card,.timeline-card"

).forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursorRing.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursorRing.classList.remove("active");

});

});
// =====================================
// Mobile Menu
// =====================================

const menu=document.getElementById("navMenu");

const menuButton=document.getElementById("menuToggle");

menuButton.onclick=()=>{

menu.classList.toggle("open");

};

// =====================================
// Navbar Scroll
// =====================================

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.top="10px";

navbar.style.transform="translateX(-50%) scale(.95)";

}else{

navbar.style.top="20px";

navbar.style.transform="translateX(-50%) scale(1)";

}

});

// =====================================
// Active Navigation
// =====================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==========================================
Scroll Progress
==========================================*/

const progressBar=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=

(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});

/*==========================================
Back To Top
==========================================*/

const backTop=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

