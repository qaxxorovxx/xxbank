function login() {
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('login-error');

    const users = {
        'Axmadjon': {
            password: '1234',
            cards: [
                { number: '0101 1020 0121 2012', owner: 'A Qaxxorov', expiry: '01/12', balance: '115000.21 USD' },
                // Add more cards if needed
            ]
        },
        'O\'tkir': {
            password: '1234',
            cards: [
                { number: '0202 2030 0232 2022', owner: 'O\' Qaxxorov', expiry: '02/12', balance: '184545.01 USD' },
            ]
        }
    };

    if (users[nickname] && users[nickname].password === password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('content').style.display = 'flex';
        loadCards(users[nickname].cards);
    } else {
        loginError.textContent = 'Foydalanuvchi nomi yoki parol noto\'g\'ri';
    }
}

function loadCards(cards) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.onclick = () => showBalance(index, cards);
        cardDiv.innerHTML = `
            <div class="card-content">
                <div class="card-chip"></div>
                <div class="card-number">${card.number}</div>
                <div class="card-owner">${card.owner}</div>
                <div class="card-expiry">${card.expiry}</div>
            </div>
        `;
        cardsContainer.appendChild(cardDiv);
    });
}

function showBalance(index, cards) {
    const selectedCard = cards[index];
    document.getElementById('summary-owner').textContent = 'Ism Familiya: ' + selectedCard.owner;
    document.getElementById('summary-card-number').textContent = 'Karta raqami: ' + selectedCard.number;
    document.getElementById('balance').textContent = 'Kartadagi mablag\'i: ' + selectedCard.balance;
}

function logout() {
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('content').style.display = 'none';
}
