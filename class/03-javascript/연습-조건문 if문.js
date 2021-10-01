

if ("철수" === "철수"){
    console.log("철수가 맞습니다.")
} else {
    console.log("철수가 아닙니다.")
}
// VM252:2 철수가 맞습니다.
// undefined

if ("철수" === "철수"){
    console.log("철수가 맞습니다.")
} 
// VM272:2 철수가 맞습니다.
//undefined

if ("철수" !== "철수"){
    console.log("철수가 맞습니다.")
} else {
    console.log("철수가 아닙니다.")
}
// VM278:4 철수가 아닙니다.
// undefined

const age = 13 
// undefined

age
// 13

if (age >= 20) {
        console.log ("성인입니다.!")
} else if (age >= 8) {
        console.log ("학생입니다.!") 
} else {
        console.log ("어린이입니다.!")
}
// VM713:4 학생입니다.!
// undefined

const profile = {
    name: "영희",
    age: 17,
    school: "다람쥐고등학교"
}
// undefined

profile.school 
'다람쥐고등학교'
//  온점으로 묻는게 > 위의 프로필의 학교를 보여줘 > profile.school 

// -------------------------------------------------------------------------------------------

const profile = { 
    name: "철수",    
    age: 12,
    school: "다람쥐초등학교"
}
// undefined

profile.age
// 12

if (profile.age >= 20) { 
    // 위에서 프로필의 나이를 정의했으니까 프로필.에이지로 불러야함
        console.log ("성인입니다.!")
} else if (profile.age >= 8) {
        console.log ("학생입니다.!") 
} else {
        console.log ("어린이입니다.!")
}
// VM1325:4 학생입니다.!