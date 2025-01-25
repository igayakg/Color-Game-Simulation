function simulate() {
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];

    // Clear existing rows
    resultsTable.innerHTML = '';

    // Sample data
    const sampleData = [
        { round: 1, spin: 'Red', ret1: 10, ret2: 20, ret3: 30, outcome: 'Win', balance: 100, final: 110 },
        { round: 2, spin: 'Green', ret1: 15, ret2: 25, ret3: 35, outcome: 'Lose', balance: 90, final: 95 },
        { round: 3, spin: 'Yellow', ret1: 20, ret2: 30, ret3: 40, outcome: 'Win', balance: 120, final: 130 },
        { round: 4, spin: 'Red', ret1: 10, ret2: 20, ret3: 30, outcome: 'Win', balance: 100, final: 110 },
        { round: 5, spin: 'Green', ret1: 15, ret2: 25, ret3: 35, outcome: 'Lose', balance: 90, final: 95 },
        { round: 6, spin: 'Yellow', ret1: 20, ret2: 30, ret3: 40, outcome: 'Win', balance: 120, final: 130 },
        { round: 7, spin: 'Red', ret1: 10, ret2: 20, ret3: 30, outcome: 'Win', balance: 100, final: 110 },
        { round: 8, spin: 'Green', ret1: 15, ret2: 25, ret3: 35, outcome: 'Lose', balance: 90, final: 95 },
        { round: 9, spin: 'Yellow', ret1: 20, ret2: 30, ret3: 40, outcome: 'Win', balance: 120, final: 130 }
    ];

    // Populate table with sample data
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