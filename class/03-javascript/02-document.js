function counter() {
    // 기능 넣기 위한 펑션, 숫자 올리기 버튼 누르면 카운터 되게 
     
        // document.getElementById("count").innerText = 1
        // count라는 아이디를 가져와주세요. html에서는 숫자 없음 > 0도 텍스트니까 innerText > 그리고 1로 바꿔주세요

        // const temp = document.getElementById("count").innerText + 1
        //     // 임시로 담을 변수를 temp라 함
        // document.getElementById("count").innerText = temp
        // 근데 이렇게 하면 문자기 때문에 0111111 로 나옴

        const temp = Number(document.getElementById("count").innerText) + 1
                    // 숫자로 바꾸는 Number 넣어야함
        document.getElementById("count").innerText = temp
}

