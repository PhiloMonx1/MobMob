'use strict';

const tips = [
    {
     tip : "일정을 입력하고 관리해보세요!",
     sub : "tip: 일정 입력란에 입력하고 엔터",
    },
    {
     tip : "일정의 완료 여부를 체크할 수 있어요",
     sub : "tip: 일정 왼쪽의 박스 클릭",
    },
    {
     tip : "완료된 일정 갯수 만큼 포인트를 쌓아보세요",
     sub : "tip: 현재 포인트 클릭하기",
    },
    {
     tip : "현재 계신 지역의 날씨와 온도를 표시해요",
     sub : "tip: 위치 정보를 허용하기",
    },
    {
     tip : "원한다면 일정을 삭제할 수 있어요",
     sub : "tip: 등록된 일정 오른쪽 ... 클릭하기",
    },
    {
     tip : "삭제된 일정으론 포인트를 얻을 수 없어요",
     sub : "tip: 포인트가 필요하다면 현재포인트를 클릭",
    },
        {
     tip : "시계가 너무 흐린가요?",
     sub : "tip: 시계를 터치하거나 마우스를 올려보기",
    },
    {
     tip : "포인트 초기화가 가능하다는거 알고있나요?",
     sub : "tip: 깃헙 오른쪽의 공유 아이콘 눌러보기",
    },
    {
     tip : "해당 웹은 반응형으로 제작되었어요",
     sub : "tip: 웹 크기 변경하기",
    },
    {
     tip : "팁이 잘 안보이신다고요?",
     sub : "tip: 팁을 터치하거나 마우스를 올려보기",
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