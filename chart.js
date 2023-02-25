let year = document.querySelector('.year h2');
let months = document.querySelector('.months h2');
let day = document.querySelector('.day h2');
let hour = document.querySelector('.hour h2');
let min = document.querySelector('.min h2');
let sec = document.querySelector('.sec h2');


setInterval(() => {
  
    let time = new Date();
    year.innerText = time.getFullYear()
    months.innerText = time.getDay();
    day.innerText = time.getHours();
    hour.innerText = time.getHours()
    min.innerText = time.getMinutes();
    sec.innerText = time.getSeconds()
    
    
    
}, 1000);



