function simulate() {
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];

    // Clear existing rows
    resultsTable.innerHTML = '';

    // Sample data

    const sampleData = generateRoundsData();
  
    sampleData.forEach(data => {
        const row = resultsTable.insertRow();
        row.insertCell(0).innerText = data.round;
        row.insertCell(1).innerText = data.spin;
        row.insertCell(2).innerText = data.ret1;
        row.insertCell(3).innerText = data.ret2;
        row.insertCell(4).innerText = data.ret3;
        row.insertCell(5).innerText = data.outcome;
        row.insertCell(6).innerText = data.balance;
        row.insertCell(7).innerText = data.final;
    });

}

function generateRoundsData() {
    const tempArray = [];
    
    const betRed = parseInt(document.getElementById('js-bet-red').value);
    const betYellow = parseInt(document.getElementById('js-bet-yellow').value);
    const betGreen = parseInt(document.getElementById('js-bet-green').value);
    const minutes = document.getElementById('js-minutes').value 
    
    let initialBalance = parseInt(document.getElementById('js-initial-money').value);
    let finalBalance = initialBalance;

    for (let i = 1; i <= 100; i++) {
        const spinNum = getRandomNumber();
        const outcome = () => {
            let red = betRed;
            let yellow = betYellow;
            let green = betGreen;

            if (gameResults(spinNum)[0] == 'lose'){
                red *= -1
            }
            if (gameResults(spinNum)[1] == 'lose'){
                yellow *= -1
            }
            if (gameResults(spinNum)[2] == 'lose'){
                green *= -1
            }
            return red + yellow + green;
        }

        finalBalance += outcome();

        tempArray.push({
            round: i,
            spin: spinNum,
            ret1: gameResults(spinNum)[0],
            ret2: gameResults(spinNum)[1],
            ret3: gameResults(spinNum)[2],
            outcome: outcome(),
            balance: initialBalance,
            final: finalBalance
        });
        initialBalance = finalBalance;
    }

    return tempArray;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 24) + 1;
}

function gameResults(randomNum) {
    const array = [
        ['win', 'win', 'win'],
        ['win', 'win', 'lose'],
        ['win', 'lose', 'win'],
        ['lose', 'lose', 'lose'],
        ['lose', 'win', 'win'],
        ['lose', 'win', 'lose'],
        ['win', 'lose', 'win'],
        ['win', 'lose', 'lose'],
        ['win', 'win', 'win'],
        ['lose', 'win', 'lose'],
        ['lose', 'lose', 'win'],
        ['lose', 'lose', 'lose'],
        ['win', 'win', 'win'],
        ['win', 'win', 'lose'],
        ['win', 'lose', 'win'],
        ['lose', 'lose', 'lose'],
        ['lose', 'win', 'win'],
        ['lose', 'win', 'lose'],
        ['win', 'lose', 'win'],
        ['win', 'lose', 'lose'],
        ['win', 'win', 'win'],
        ['lose', 'win', 'lose'],
        ['lose', 'lose', 'win'],
        ['lose', 'lose', 'lose']
      ]
    return array[randomNum - 1];
}

console.log(gameResults(7));
