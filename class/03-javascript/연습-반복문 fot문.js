// // for (초기식 ) {
// 반복해서 나타날 것 쓰기
// }

for ( let i=0; i<5; i=i+1) {
    console.log("Hello")
}
// 5VM1483:2 Hello


// const classmates = []  >> 배열은 앞에 s붙어야함 암묵적 동의 > clssmate's"
const classmates = ["철수", "영희", "훈이"] 
for ( let j=0; j<3; j=j+1) {
    console.log(classmates[j] + "어린이" )   
}
// VM1897:3 철수어린이
// VM1897:3 영희어린이
// VM1897:3 훈이어린이

const classmates = ["철수", "영희", "훈이"] 
for ( let j=0; j<classmates.length; j=j+1) {
    // 3 대신에 길이 쉽게 하려고 length
    console.log(classmates[j] + "어린이" )   
}
// 철수어린이
// VM1917:3 영희어린이
// VM1917:3 훈이어린이


const profiles = [
    { name: "철수", age:8 },
    { name: "영희", age:10 },
    { name: "훈이", age:12 }
]
// undefined

profiles[1].age
10
// 영희 나이 알아내는거




const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
//  프루츠에 값 넣고

fruits[0].title
// '레드향'

fruits[1]
// {number: 2, title: '샤인머스켓'}
// number: 2
// title: "샤인머스켓"
// [[Prototype]]: Object


fruits[1].number
// 2

fruits[1].title
// '샤인머스켓'


for (let i=0; i<fruits.length; i=i+1) {
        console.log (fruits[0].number + " " + fruits[0].title )
}
// 10VM3327:2 1 레드향
// undefined
// 이거는 한줄만 나옴


for (let i=0; i<fruits.length; i=i+1) {
        console.log (fruits[i].number + " " + fruits[i].title )
}
// VM3383:2 1 레드향
// VM3383:2 2 샤인머스켓
// VM3383:2 3 산청딸기
// VM3383:2 4 한라봉
// VM3383:2 5 사과
// VM3383:2 6 애플망고
// VM3383:2 7 딸기
// VM3383:2 8 천혜향
// VM3383:2 9 과일선물세트
// VM3383:2 10 귤
// undefined