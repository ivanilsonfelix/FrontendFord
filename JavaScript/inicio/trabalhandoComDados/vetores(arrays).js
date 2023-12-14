//é como uma caixa com outras caixas dentro, que podem ser acessadas através do seu 
// índice entre colchetes []. O primeiro índice é sempre o 0 (zero), portanto um vetor de 4 posições terá 
// índice de 0 a 3. Elas se comportam como variáveis em tudo, e preciso utilizar colchetes tanto na 
// declaração como no acesso aos dados.

//array em js é heterogenio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;

// indice =        0    1   2     3       4
const valores = [18.0, 80, 43, 1.8888, "teste"]

//var(array) -> definindo um indice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 //--> incluindo o indice 10 no array

console.log(`
${valores[0]}
${valores[3].toFixed(1)} //limita as casas decimais em 2 após a virgula
${valores[10]}
${valores}
${valores.length} //extensão do nosso array (numeral)

`)

//********************************************************************IMPLMENTAR MÉTODOS DE ARRAY**************************************************************************************


//MÉTODOS DE ARRAY1
//1 - push  -> utilizado para adicionar itens no array (sempre na ultima posição)

//posiçoes
const pushArray = ['girafa', 'leão' , 'coala' , 'camaleão']

console.log(pushArray[2])

//adicionando valores
pushArray.push('caramelo') //adidiona no final do array
pushArray.unshift('animal01') // adiciona no inicio do array

console.log(pushArray)



// 2 -> pop -> remove o último item do array
const popArray = ['andre' , 'leonardo' , 'ana' , 'beatriz'] 

console.log(popArray)
popArray.pop(); //remove o ultimo valor do array
popArray.shift(); //remove o primeiro valor do array

console.log(popArray);



// 3 - delete  -> deleta os valores

const deleteArray = ['banana' , 'maça' , 'pera' , 'uva' , 'salada mista']
console.log(deleteArray)

delete deleteArray[1]

console.log(deleteArray)



// 4 - splice -> substituir valores

//         metodos   indice   qtd de valor     novo valor
deleteArray.splice(    1,          1,           'melão')
console.log(deleteArray);



// 5 - filter  -> funções - somente consegue visualizar porem não modifica
 
const filterArray = [1,50,20,35,60]

console.log(filterArray);
const arrayFiltrado = filterArray.filter((finArray) => {


    console.log(finArray)

    //bloco de execução

    return finArray > 20
}) 
//saida de dados
console.log(arrayFiltrado);



// 6 -  map  -> modifica o array existente e cria novo array modificado - funções
const mapArray = [10, 15,20,25,30,35]
console.log(mapArray)

//inicio modificação array
const arrayModificado = mapArray.map((mapArrayModificado) => {
    return mapArrayModificado *2
})
console.log(arrayModificado)



// 7 - foreach  -> somente para listar valores

const forArray = ['jubileu' , 'eyk' , 'jabes' , 'ane']
forArray.forEach((listarArray) => {

    return console.log(listarArray);
    
})


// 8 - sort  -> organiza array string, não funciona bem com numeros
//Crie um array de nomes e em seguida organize eles em ordem alfabética

const sortArray = ['janeiro' , 'fevereiro' ,'março' , 'abril' ,'maio' , 'junho']
console.log(sortArray)
sortArray.sort()
console.log(sortArray);

const arraySortNumber = [10, 232, 542, 871, 1050]
console.log(arraySortNumber)
arraySortNumber.sort()
console.log(arraySortNumber);



// 9 - reduce



//*************Exercício ***************/
//crie 2 arrays: nomes e sobrenomes
//crie um terceiro array de nomesCompleto
//ao final, exiba os nomes completos no console com o foreach
//é necessário conter pelo menos 5 nomes
//utilizar arrow functions
//se necessário, utilize outros métodos de array



const nomeArray = ['rafael' , 'hellen' , 'gabriele' , 'ricardo' , 'ivanilson']; 
const sobrenomeArray = ['perdigão' , 'silva' , 'costa' , 'almeida' , 'felix'];
const nomeCompletoArray = nomeArray.map((nome , index) => nome + " " + sobrenomeArray[index]);
    

console.log(nomeCompletoArray);





