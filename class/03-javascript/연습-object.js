// 객체=object
const profile = {
    name: "철수",
    gender: "남자",
    age: 10
}
// undefined
profile
// {name: '철수', gender: '남자', age: 10}age: 10gender: "남자"name: "철수"[[Prototype]]: Object
const profile2 = { name:"영희", gender:"여자", age:10 }
// undefined
profile2
// {name: '영희', gender: '여자', age: 10}age: 10gender: "여자"name: "영희"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
profile.name
// '철수'
profile2.gender
// '여자'