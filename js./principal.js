var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente');
for (let contador = 0; contador < pacientes.length; contador++){
    var dadosPaciente = pacientes[contador];
    var altura = dadosPaciente.querySelector('.info-altura').textContent;
    var peso = dadosPaciente.querySelector('.info-peso').textContent;
    var imc = peso/(altura*altura);
    dadosPaciente.querySelector('.info-imc').textContent = imc;
}

const pacientes = [
    { nome: "Paulo", peso: 100, altura: 2.00 },
    { nome: "João", peso: 80, altura: 1.72 },
    { nome: "Erica", peso: 54, altura: 1.64 },
    { nome: "Douglas", peso: 85, altura: 1.73 },
    { nome: "Tatiana", peso: 46, altura: 1.55 }
];

pacientes.forEach(paciente => {
    const imc = paciente.peso / (paciente.altura * paciente.altura);
    console.log(`${paciente.nome}: IMC = ${imc.toFixed(2)}`);
});
