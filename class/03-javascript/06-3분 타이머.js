180/60
// 3 몫이 앞에 3분으로 나옴

180 % 60
// 0

179/60
// 2.9833333333333334

Math.floor(179/60)
// 2

179%60
// 59


let time = 180
// 3분이니까 180으로
setInterval(() => {
    if(time >= 0){
        const minutes = Math.floor(time / 60)
        // 60분으로 나눠서 나머지 값 floor해야 분이 나옴
        const seconds = time % 60
        // 초 나오게 끔

        console.log (minutes + ":"+ seconds)
        time = time - 1
    }
}, 1000)