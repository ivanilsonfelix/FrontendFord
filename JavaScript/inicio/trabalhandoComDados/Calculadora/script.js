function Calcular(e) {
    event.preventDefault() //impede de recarregar a página automaticamente
    // valor capturado no input e guardando o valor na variavel n1
    let n1 = parseInt(document.getElementById('num1').value)
    //valor capturado no input e guardando o valor na variavel n2
    let n2 = parseInt(document.getElementById('num2').value)
    //operação escolhida pelo usuário (+, -, /, *)
    let operacao= document.getElementById("operacao").value
    // variavel para guardar o resultado
    let resultado;


    // validadção par ao usuário não digitar palavras e apenas números

    // if (NaN(n1) && NaN(n2)){
        // alert("Somente números")
        
    
    switch (operacao) {
        case 'Somar':
            resultado = n1 + n2
            document.getElementById(`resultado`).innerHTML = resultado
    
            
            break;

        case 'Subtrair':
            resultado = n1 - n2
            document.getElementById(`resultado`).innerHTML = resultado
    
            
            break;

        case 'Multiplicar':
            resultado = n1 * n2
            document.getElementById(`resultado`).innerHTML = resultado
    
            
            break;

        case 'Dividir':
                       
            if (n1 == 0 || n2 == 0) {
            //resultado = n1 / n2
            const resp = ("Não é possivel dividir por 0")
            document.getElementById("resultado").innerHTML =  resp
            } else {
                resultado = n1 / n2
                document.getElementById(`resultado`).innerHTML = resultado
    
                
            }
                
            
            
            break;
    
        default:
            alert("Opção inválida")
            break;

            
    }
    
    
}
    
