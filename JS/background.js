'use strict';

const imgNum = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", 
"05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", ];

const choiceBg = imgNum[parseInt(Math.random()*imgNum.length)];
const bgImg = document.createElement("img")

bgImg.src = `img/${choiceBg}`
document.body.appendChild(bgImg);