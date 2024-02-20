const estados = [
    { 
        estado: "São Paulo", 
        faturamento: 67836.43 
    },
    { 
        estado: "Rio de Janeiro", 
        faturamento: 36678.66 
    },
    { 
        estado: "Minas Gerais", 
        faturamento: 29229.88 
    },
    { 
        estado: "Espirito Santo", 
        faturamento: 27165.48 
    },
    { 
        estado: "Outros", 
        faturamento: 19849.53
    }
];

let valorTotalMensal = estados.reduce((total, estado) => total + estado.faturamento, 0);

document.addEventListener('DOMContentLoaded', function () {
    const ex3 = document.querySelector('.ex_3');

    ex3.innerHTML = estados.map(estado => `
        <div class="item">
            <div class="person">
                <h5>${estado.estado}</h5>
                <small>R$${estado.faturamento.toFixed(2)}</small>
            </div>
            <p>
                O percentual de representação foi de <b> ${((estado.faturamento / valorTotalMensal) * 100).toFixed(2)}% </b> dentro do valor total de <b>R$${valorTotalMensal.toFixed(2)}</b>
            </p>
        </div>
    `).join('');
});
