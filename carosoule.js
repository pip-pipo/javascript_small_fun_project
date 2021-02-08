const imgs = document.querySelectorAll("img");
console.log(imgs);
const imgsAll =document.querySelector("#imgs")
let index = 0;

function changeImg() {
  index++;

  if (index > imgs.length - 1) {
    index = 0;
  }
  imgs[index].style.transform = `translateX(${-index * 500}px)`;
  
 
}

setInterval(changeImg, 2000);
