setTimeout(() => {
    console.log("3초가 지났군요!")
           }, 3000)

// 3초 뒤에 문구 나옴


setInterval (() => {
    console.log("1초 경과")
    }, 1000)




let time = 10 

setInterval (() => {
    console.log(time)
    time = time - 1
}, 1000)

// 10초 동안 -1씩 계속 빠지는거 대신 마이너스가 끝 없이 나옴

let time = 10 

setInterval (() => {
    if(time >= 0) {
        console.log(time)
        time = time - 1
    }
}, 1000)

// if문 시간이 0보다 클 때 까지만 조건 줘서 마이너스 안나오게 만듦

