let n1
let n2
form = document.getElementById("forms")
/* function showResult() {

} */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    if(n2>n1){
        document.getElementById("resultado").innerHTML = "o segundo número é maior"
    }
        else if (n1>n2) {
             document.getElementById("resultado").innerHTML = "o segundo número não é maior"
        }
        else {
        document.getElementById("resultado").innerHTML = "os números são iguais"
        }
  console.log(n1)
  console.log(n2)
  
})
