// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const recebePrimeiroNum = prompt('Digite o primeoro número:')
  const recebeSegundoNum = prompt('Digite o segundo Número:')
  const calcula = recebePrimeiroNum * recebeSegundoNum

  console.log(calcula)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual:')
  const anoDeNascimento = prompt('Digite o ano do seu nascimento:')
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return calculaIMC = peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual a sua idade?') 
  const email = prompt('Qual o seu e-mail?')
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)
 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt('Digite sua primeira cor favorita:')
const cor2 = prompt('Digite sua segunda cor favorita:')
const cor3 = prompt('Digite sua terceira cor favorita:')

const array = [cor1,cor2,cor3]
console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return novaString = string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return ingressosParaVender = custo / valorIngresso 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 > string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const troca = array[0]
  array[0] = array[array.length -1] 
  array[array.length -1] = troca
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return  string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual')
  const anoDeNascimento = prompt('Digite o ano de nascimento')
  const anoEmissao = prompt('Digite o ano da emissão')

  const idade = anoAtual - anoDeNascimento
  const tempoCarteira = anoAtual - anoEmissao
  const renova20 = idade <= 20 && tempoCarteira >= 5
  const renova2050 = idade > 20 && idade <= 50 && tempoCarteira >= 10
  const renova51 = idade > 50 && tempoCarteira >= 15
  console.log(renova20 || renova2050 || renova51)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const AnoBi = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0);
  return AnoBi
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // "tem mais de 18?","tem ensino médio completo?","tem disponibilidade de horários?"
  // implemente sua lógica aqui
  const idade = prompt("tem mais de 18?")
  const escolaridade = prompt("tem ensino médio completo?")
  const disponibilidade = prompt("tem disponibilidade de horários?")

  const resposta = (idade === "sim") && (escolaridade === "sim") && (disponibilidade === "sim")
  console.log(resposta)
 
}
