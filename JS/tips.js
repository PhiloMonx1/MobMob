'use strict';

const tips = [
    {
     tip : "좋은 희망을 품는 것은 그것을 이룰 수 있는 지름길이다.",
     sub : "<루터>",
    },
    {
     tip : "끝을 맺기를 처음과 같이 하면 실패가 없다.",
     sub : "<노자>",
    },
    {
     tip : "모든 날 중 가장 완전히 잃어버린 날은 웃지 않는 날이다.",
     sub : "<샹포르>",
    },
    {
     tip : "열의 없이 성취 된 위업이란 아직 하나도 없다.",
     sub : "<에머슨>",
    },
    {
     tip : "금전은 비료와 같은 것으로 뿌리지 않으면 쓸모가 없다.",
     sub : "<베이컨>",
    },
    {
     tip : "지도자란 희망을 파는 상인이다.",
     sub : "<나폴레옹>",
    },
        {
     tip : "마음의 통일 없이 무슨 일을 이룰 수 있겠는가?",
     sub : "<원효>",
    },
    {
     tip : "사랑은 늙는 다는 것을 모른다.",
     sub : "<스탕달>",
    },
    {
     tip : "가르치다는 곧 두 번 이상 배우는 것이다. ",
     sub : "<죠셉 쥬베르>",
    },
    {
     tip : "진리는 적이건 아군이건 모두 초월한다.",
     sub : "<쉴러>",
    },
]

const tip = document.querySelector("#tips :nth-child(1)");
const sub = document.querySelector("#tips :nth-child(2)");

function outputTip(){
    const random = parseInt(Math.random()*tips.length);
    tip.innerText = tips[random].tip;
    sub.innerText = tips[random].sub;
}

outputTip();