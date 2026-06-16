function login(){
let user=document.getElementById('username').value.toLowerCase();
if(user==='amartya'){
document.getElementById('loginPage').style.display='none';
document.getElementById('birthdayPage').style.display='block';
typeWriter();
}else{
document.getElementById('error').innerHTML='Only Amartya can enter ❤️';
}}

const candles=document.querySelector('.candles');
for(let i=0;i<15;i++){
let c=document.createElement('div');
c.className='candle';
let f=document.createElement('div');
f.className='flame';
c.appendChild(f);
candles.appendChild(c);
}

for(let i=0;i<60;i++){
let heart=document.createElement('div');
heart.className='heart';
heart.innerHTML='❤️';
heart.style.left=Math.random()*100+'vw';
heart.style.animationDuration=(5+Math.random()*5)+'s';
document.body.appendChild(heart);
}

const msg=`My Dearest Antara,
Today is your special day.
May your smile always shine brighter than the stars.
Happy Birthday ❤️`;

let i=0;
function typeWriter(){
let box=document.getElementById('typewriter');
let timer=setInterval(()=>{
box.innerHTML+=msg.charAt(i);
i++;
if(i>=msg.length) clearInterval(timer);
},50);
}

document.getElementById('musicBtn').onclick=function(){
document.getElementById('music').play();
};