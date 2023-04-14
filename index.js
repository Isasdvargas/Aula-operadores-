//exercício 1
let kelvin = (77 - 32)*(5/9) + 273.15 
console.log(kelvin) 

let fahrebheit = (80)*(5/9) + 32
console.log(fahrebheit) 

let celsius = (30)*(5/9) + 32 
console.log(celsius)
 
//exercício 2 
nome = prompt("Digite seu nome:");

const nota1 = Number(prompt("Digite a nota 1:")); 
const nota2 = Number(prompt("Digite a nota 2:"));
const nota3 = Number(prompt("Digite a nota 3:"));
 
let soma = nota1 + nota2 + nota3; 
let media = soma / 3 

console.log(nome, media, media >= 6)

if (media>=6) {
    alert(nome, ", sua media foi", media, "parabens");

} else {
    alert(nome + ", sua media foi "+ media + "Precisa repetir de ano")
}

//exercício 3 
let num = prompt("Digite um número:");
 
if(num % 2 === 0) {
    alert("é par")
} else {
    alert("é impar")
}

// exercício 4

let num1 = prompt("Digite um número número:");
let num2 = prompt("Digite outro número:");

if (num1 > num2){
    alert(num1)
} else {
    alert(num2)
}


