//TIPOS DE VARIÁEIS
let idade = 5; //number literal
console.log(idade);

let altura = 1.63; //number
console.log(altura);

//sempre nomear tipo camelCase

let nomeCompleto = 'Karol'; //string literal
console.log(nomeCompleto);

let corFavorita = 'Amarelo';
console.log(corFavorita);

let sobrenome = undefined; //indefinido (pouco utilizado)

let estaAprovado = true; //boolean

let corSelecao = null; //objeto, para redefinir valor

//TIPAGEM DINÂMICA: caso você não defina o tipo da variável, o JS reconhece através do valor atribuido

//OBJETO: junta as informações para acessar através da propriedade do objeto
let pessoa = {
    nome: 'Karol',
    idade: 22,
    estaAprovado: true,
    sobrenome: 'Batistela',
    corFavorita: 'amarelo',
};

console.log(pessoa);

//ARRAYS: CONJUNTO DE DADOS QUE PODE SER ACESSADO POR UM INDICE

let familia = [22,39,45,53]

console.log(familia.length); //exibe o tamanho do array
console.log(familia[2]); //o 2 é o índice para exibir o valor que está nessa posição

let nomeDoColega = ['Karol',22,'Americana','Roxo','SP']
console.log(nomeDoColega);
console.log(nomeDoColega[3]);
console.log(nomeDoColega.length);

//FUNCTIONS: CONTROLA O FLUXO DE EXECUÇÃO, ENTRADA E SAÍDA DE DADOS
//PARA NOMEAR UMA FUNÇÃO: VERBO + SUBSTANTIVO
let corSite = "azul"
function resetaCor(){
    corSite = "";
};

resetaCor(); //chama a função

tamanhoSite = 5;

function alteraTamanho(tam, lar) { //parametrizado
    tamanhoSite = tam + ' ' + lar; //o + concatena (recomendado colocar o espaço se necessário)
};

console.log(tamanhoSite);
alteraTamanho(2,9);
console.log(tamanhoSite);

//TIPOS DE FUNÇÕES

//1 Realiza uma tarefa e não retorna nada
function dizerNome(){
    console.log('Karol');
}

dizerNome();

function multiplicarPorDois(valor) {
    return valor * 2;
}

//console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado);

//OPERADORES
//Aritméticos (matemáticos)
let salario = 100;

// + - * / ** (soma, subtração, multiplicação, divisão, exponencial)
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

// ++ -- (incremento e decremento)
let idade = 18;
console.log(idade++); //incrementa no próximo
console.log(idade);
console.log(++idade); //incrementa de imediato
//igualmente para o -- (decremento)

//Atibuição
let valorTeclado = 100;
valorTeclado += valorTeclado //soma e atribui o valor da soma pra variável
//isso pode ser feito para todos os operadores aritméticos

//Comparação
//Igualdade estrita (ideal usar esse)
console.log(1 === 1); //compara se o tipo (no caso number) e se os valores são iguais 
console.log('1' === 1); //vai dar false porque um é string e o outro é number

//Igualdade solta (não é recomendado usar esse)
console.log(1 == 1); //compara apenas os valores
