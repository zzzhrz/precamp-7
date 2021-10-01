for( let i=0 ; i<5 ; i=i+1  ){
    console.log("Hello!!!")
}
// 5VM223:2 Hello!!!
// undefined
for( let asdfasf=0; asdfasf<5; asdfasf=asdfasf+1 ){
    console.log("Hi~~")
}
// 5VM322:2 Hi~~
// undefined
const classmates = ["철수", "영희", "훈이"]
for(let j=0 ; j<3 ; j=j+1){
    console.log(classmates[j] + "어린이")
}
// VM518:3 철수어린이
// VM518:3 영희어린이
// VM518:3 훈이어린이
// undefined
const classmates = ["철수", "영희", "훈이"]
for(let j=0 ; j<classmates.length ; j=j+1){
    console.log(classmates[j] + "어린이")
}
// VM544:3 철수어린이
// VM544:3 영희어린이
// VM544:3 훈이어린이
// undefined
const profiles = [
    { name: "철수", age: 8 },
    { name: "영희", age: 10 },
    { name: "훈이", age: 12 }
]
// undefined
profiles[1].age
// 10
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
// undefined
fruits[0].number
// 1
fruits[0].title
// '레드향'
fruits[1].number
// 2
fruits[1].title
// '샤인머스켓'
for(let i=0; i<fruits.length; i=i+1){
    console.log( fruits[i].number + " " + fruits[i].title )
}
// VM1427:2 1 레드향
// VM1427:2 2 샤인머스켓
// VM1427:2 3 산청딸기
// VM1427:2 4 한라봉
// VM1427:2 5 사과
// VM1427:2 6 애플망고
// VM1427:2 7 딸기
// VM1427:2 8 천혜향
// VM1427:2 9 과일선물세트
// VM1427:2 10 귤
// undefined
for(let i=0; i<fruits.length; i++){
    console.log( fruits[i].number + " " + fruits[i].title )
}
// VM1445:2 1 레드향
// VM1445:2 2 샤인머스켓
// VM1445:2 3 산청딸기
// VM1445:2 4 한라봉
// VM1445:2 5 사과
// VM1445:2 6 애플망고
// VM1445:2 7 딸기
// VM1445:2 8 천혜향
// VM1445:2 9 과일선물세트
// VM1445:2 10 귤
// undefined