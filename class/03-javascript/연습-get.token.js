// const token = String (Math.floor(Math.random() * 45) +1).padStart (6, "0")
// 내가 한거 틀림ㅠㅠ 로또 6자리 만들기

const token = String (Math.floor(Math.random() * 100000)) . padStart (6, "0")
// 6자리로 만들기 위해서 *100000

//  근데 이렇게 만들면 계속 같은 숫자가 나옴 / 그래서 아래의 펑션으로 계속 다른 숫자를 만들어주게끔 만듦

// --------------------------------------------------------------------------------

function aaa() {

    const token = String (Math.floor(Math.random() * 100000)) . padStart (6, "0")
    console.log(token)
}

//  function = 기능 = 함수 실행하려면 위에 만든 그룹인 aaa() 괄호까지 쳐야함