function  yozish(event){
    console.log(event.target.value)
}

document.querySelector('.classNomi').addEventListener('copy',function(event){
    console.log("Diqqat! Sizdan '" + event.target.value + " ' nomli fayllar ko'chirilyapti")
});