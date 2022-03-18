//Criando a função para o botão
function Chutar()
{
    // criando variável para receber um número pseudo-aleatório
    let secretNumber = parseInt(Math.random() * 11)
    //Criando variável para receber o número do input
    let shoot = parseInt(document.getElementById("value").value)
    //criando variável para receber o ID da DIV onde iremos imprimir o resultado
    let result = document.getElementById("result")
    
    //Interações do console
    console.log(`Sua tentativa foi: ${shoot}`);
    console.log(`O resultado era ${secretNumber}`);

    //Abrindo condições IF, ELSE IF e ELSE
    if(shoot == secretNumber)
    {
        //Caso o número seja igual ao secreto
        console.log("Correct")
        result.innerHTML = "Correct!"
    }
    else if(shoot > 10 || shoot < 0)
    {
        //Caso o usuário digite um número menor que 0 ou maior que 10
        console.log("Type a number bigger then 0 and less than 10");
        result.innerHTML = "Type a number between 0 and 10"
    }
    else
    {
        //Caso o usuário erre o número
        console.log("Wrong");
        result.innerHTML = `Wrong! Try again, the value was ${secretNumber}`
    }
}