// Resolução 1 - Utilizando um for tradicional e uma variável soma e if para comparar se o aluno foi aprovado ou não.
function media(notas) {
    // cria a variável soma
    let soma = 0;

    // percorre o array, imprime cada nota em seu respectivo bimestre, soma as notas e adiciona a variável soma.
    for (let index = 0; index < notas.length; index++) {
        console.log(`Sua nota do ${index + 1}º bimestre foi ${notas[index]}`);
        soma += notas[index];
    }

    // cria a variável mediaNotas e adiciona a ela o calculo da média das notas.
    const mediaNotas = soma / notas.length;

    // imprime a mensagem que exibe a média fina do aluno.
    console.log(`Parabéns pela conclusão do primeiro semestre. Sua média foi: ${mediaNotas}`);

    /* compara se a media do aluno foi igual ou maior que 7, se for verdadeiro imprime a mensagem que o aluno foi aprovado,
   senão imprime a mensagem que o aluno foi reprovado */
    if (mediaNotas >= 7) {
        console.log('Parabéns você foi aprovado!');
    } else {
        console.log('Que pena! Você foi reprovado.');
    }
}

media([10, 6, 9, 8]);


// apenas para separar visualmente o resultado das 2 funções no console.log
console.log('------------------------------------------------------------------------------');


// Resolução 2 - Utilizando arrow functions como forEach e reduce e usando ternário.
function media2(notas) {
    // percorre o array, imprime cada nota em seu respectivo bimestre.
    notas.forEach((nota, index) => {
        console.log(`Sua nota do ${index + 1}º bimestre foi ${nota}`);
    });

    // percorre o array, soma as notas de cada bimestre, clacula a media de notas do aluno e adiciona a variável mediaNotas.
    const mediaNotas = notas.reduce((acc, curr) => acc + curr) / notas.length

    // imprime a mensagem que exibe a média fina do aluno.
    console.log(`Parabéns pela conclusão do primeiro semestre. Sua média foi: ${mediaNotas}`);

   /* compara se a media do aluno foi igual ou maior que 7, se for verdadeiro imprime a mensagem que o aluno foi aprovado,
   senão imprime a mensagem que o aluno foi reprovado */
    mediaNotas >= 7 ? console.log('Parabéns você foi aprovado!') : console.log('Que pena! Você foi reprovado.');
}

media2([10, 5, 8, 3]);