/*HTML teglari bilan ishlash*/
/*

let headTag = document.head;
let bodyTag = document.body;
let havola = document.documentURI;
let formalar = document.forms;


console.log(formalar)*/

/*Elements in JS (onclick,ondblclick,onchange"select",onfocus)*/

/*
function battonniBos(){
    alert("Siz battonni bir marta bosdingiz!")
}
function battonniIkkiMartaBos(){
    alert("Siz batttonni ikki marta bosdingiz!")
}
function tanlash(event){
    alert("Siz " + event.target.value + "ni tanladingiz!")
}
function  inputgaBosish(){
    console.log("Inputga bosildi!")
}
function  inputdanChiqish(){
    console.log("Inputdan chiqildi!")
}
function  yozish(event){
    console.log(event.target.value)
}
document.querySelector('.classNomi').addEventListener('copy',function(event){
    console.log("Diqqat! Sizdan " + event.target.value + " ' nomli fayllar ko'chirilyapti agar buni to'xtatmasangiz barchasi o'chib ketadi")
});*/


function  harakatlanish(e){
    console.log(e.clientX,e.clientY)
}
function  kirish(){
    console.log("Hududga kirildi!")
}
function  chiqish(){
    console.log("Hududdan chiqildi!")
}