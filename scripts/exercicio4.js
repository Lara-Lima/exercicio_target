document.addEventListener('DOMContentLoaded', function () {
    const inputStringInverter = document.getElementById('inputStringInverter');
    const inverterStringBtn = document.getElementById('inverterString');
    const resultadoStringInvertida = document.getElementById('resultadoStringInvertida');

    inverterStringBtn.addEventListener('click', function () {
        const stringOriginal = inputStringInverter.value;
        const stringInvertida = inverterString(stringOriginal);
        resultadoStringInvertida.textContent = `Palavra invertida: ${stringInvertida}`;
    });

    function inverterString(string) {
        let stringInvertida = '';

        for (let i = string.length - 1; i >= 0; i--) {
            stringInvertida += string[i];
        }

        return stringInvertida;
    }
});