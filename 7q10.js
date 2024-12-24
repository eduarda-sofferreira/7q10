var numero = Number(prompt("Digite um número para verificar se é primo:"))
var primo = true
if (numero < 2) {
    primo = false 
} else {
  
    for (var i = 2; i <= Math.sqrt(numero); i++) { 
        if (numero % i === 0) {
            primo = false
            break 
        }
    }
}
if (primo) { 
    console.log (numero + " é um número primo")
} else {
    console.log (numero + " não é um número primo")
}
