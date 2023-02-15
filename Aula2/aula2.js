const items = {
    0: 'pedra',
    1: 'papel',
    2: 'tesoura'
}

function botPlay() {
   return Math.floor(Math.random() * 3)
}

function userPlay() {
    const userChoice = prompt('Escolha entre Pedra, Papel ou Tesoura');
    return userChoice;
}

function checkScore(userChoice, botChoice) {
    let userCount = 0
    if (userChoice.toLowerCase() === 'pedra' && items[botChoice] === 'tesoura') {
        userCount += 1;
    } else if (userChoice.toLowerCase() === 'tesoura' && items[botChoice] === 'papel') {
        userCount += 1;
    } else if (userChoice.toLowerCase() === 'papel' && items[botChoice] === 'pedra') {
        userCount += 1;
    }
    return userCount;
}

function game() {
    let result = 0;
    for (let index = 0; index < 3; index++) {
        const bot = botPlay();
        const user = userPlay();
        result += checkScore(user, bot);
    }

    if (result >= 2) {
        console.log(`Você acertou ${result} de 3 partidas. Parabéns você venceu`);
    } else {
        console.log(`Você acertou ${result} de 3 partidas. Que pena não foi dessa vez! Você perdeu.`);
    }
}

game();