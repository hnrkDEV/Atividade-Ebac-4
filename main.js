let n1
let n2
form = document.getElementById("forms")
form.addEventListener('submit', function (e) {
    e.preventDefault();
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    if(n2>n1){
        document.getElementById("resultado").value = "o segundo número é maior"
        document.getElementById("resultado").style.width = "300px"
    }
        else if (n1>n2) {
             document.getElementById("resultado").value = "o segundo número não é maior"
             document.getElementById("resultado").style.width = "300px"
            
        }
        else {
        document.getElementById("resultado").value = "os números são iguais"
        }
  
})
