const getToken = () => {
    // 기능 작성하기 
    // alert()

    const token = String(Math.floor(Math.random()*100000)).padStart(6,"0")
    document.getElementById("token").innerText = token
}