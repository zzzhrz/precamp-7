    
        function sign() {
        
        const email = document.getElementById("email").value
        const password = document.getElementById("password1").value
        const password2 = document.getElementById("password2").value

        if(email !== "" && password1 !== "" && password2 !== "" ) {
            document.getElementById("mybutton").setAttribute("style", "background-color: yellow;")
        }
