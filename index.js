//Criando a função para o botão
function Chutar()
{
    // criando variável para receber um número pseudo-aleatório
    let secretNumber = parseInt(Math.random() * 11)
    //Criando variável para receber o número do input
    let shoot = parseInt(document.getElementById("value").value)
    //criando variável para receber o ID da DIV onde iremos imprimir o resultado
    let result = document.getElementById("result")
    
    //Abrindo condições IF, ELSE IF e ELSE
    if(!shoot){
        result.innerHTML = "Please, type a number"
    }
    else if(shoot == secretNumber)
    {
        //Caso o número seja igual ao secreto      
        result.innerHTML = "Correct!"
    }
    else if(shoot > 10 || shoot < 0)
    {
        //Caso o usuário digite um número menor que 0 ou maior que 10
        result.innerHTML = "Type a number between 0 and 10"
    }
    else
    {
        //Caso o usuário erre o número
        result.innerHTML = `Wrong! Try again, the value was ${secretNumber}`
    }
}