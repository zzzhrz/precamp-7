Math.random()
// 0.9732951993602401

Math.random()
// 0.25553832252396247

// 0부터 1사이의 랜덤으로 나옴

Math.random() * 1000000
// 847528.2432485196
// 랜덤으로 6자리 뽑은거에서 소수점자리에서 변경하는거
// 근데 앞에 0 붙으면 5자리로 나옴

String(Math.floor(Math.random() * 100000))
// '99498'
// 그래서 스트링으로 변경함

String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '029326'
// padStart > 6자리 뽑아서 앞에 0을 넣어라 (앞에서부터 길이/숫자, 채울 문자)
// padEnd > (뒤에서부터 할 길이/숫자, 채울문자)

// padStart은 "string".padStart(원하는 문자열의 길이,앞쪽에 추가할 "string") 
// 예) "1"padSatart(2, "0") 을 하면 문자열이 2자리가 되지 않으면 문자열 앞에 0을 출력한다.
// padEnd는 위와 같지만 문자의 뒤쪽에 추가한다.

const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
//  토근으로 설정하기

token
// '341512' > 이거 치면 6자리 숫자 나옴