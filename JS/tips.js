'use strict';

const tips = [
    {
     tip : "11111111",
     sub : "1111111111111",
    },
    {
     tip : "2222222",
     sub : "2222222222",
    },
    {
     tip : "33333333333",
     sub : "333333333333",
    },
    {
     tip : "444444444",
     sub : "444444444",
    },
    {
     tip : "55555555555",
     sub : "5555555555",
    },
    {
     tip : "6666666",
     sub : "66666666",
    },
        {
     tip : "777777",
     sub : "777777",
    },
    {
     tip : "88888888",
     sub : "8888888",
    },
    {
     tip : "9999999",
     sub : "",
    },
    {
     tip : "000000000",
     sub : "",
    },
]

const tip = document.querySelector("#tips :nth-child(1)")
const sub = document.querySelector("#tips :nth-child(2)")

function outputTip(){
    const random = parseInt(Math.random()*tips.length)
    tip.innerText = tips[random].tip
    sub.innerText = tips[random].sub
}

outputTip()