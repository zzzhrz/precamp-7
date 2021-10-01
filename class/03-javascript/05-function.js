const getToken = () => {
    // 기능 작성하기
    // alert("하이~~~~")

    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
}