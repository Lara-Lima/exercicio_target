document.getElementById('pesquisarNumFibonacci').addEventListener('click', verificarFibonacci);

function verificarFibonacci() {
    const inputNum = document.getElementById('inputNumFibonacci').value;
    const resultado = document.getElementById('resultado');
    
    if (isNaN(inputNum) || inputNum.trim() === "") {
        resultado.innerHTML = `<p>É necessário inserir um número válido.</p>`;
        return;
    }
    
    const isFibonacci = isFibonacciNumber(parseInt(inputNum));
    if (isFibonacci) {
        resultado.innerHTML = `<p>O número ${inputNum} pertence à sequência de Fibonacci.</p>`;
    } else {
        resultado.innerHTML = `<p>O número ${inputNum} não pertence à sequência de Fibonacci.</p>`;
    }
}

function isFibonacciNumber(num) {
    let a = 0;
    let b = 1;
    if (num == 0) {
        return true;
    } else {
        while (b < num) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b == num;
    }
}
