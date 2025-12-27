const bronzePlayers = [
    {
        name: "Messi",
        overall: 85,
        position: "RW",
        country: "ARG",
        club: "PSG",
        image: "images/player1.png"
    },
    {
        name: "Ronaldo",
        overall: 88,
        position: "ST",
        country: "POR",
        club: "MANU",
        image: "images/player2.png"
    },
    {
        name: "Mbappe",
        overall: 87,
        position: "ST",
        country: "FRA",
        club: "PSG",
        image: "images/player3.png"
    }
    // Добавь ещё игроков
];

function openPack(type) {
    let players;
    if (type === 'bronze') {
        players = bronzePlayers;
    }

    // Выбираем случайного игрока
    const player = players[Math.floor(Math.random() * players.length)];

    const animationDiv = document.getElementById("animation");
    const cardDiv = document.getElementById("player-card");

    // Сначала анимация: показываем страна → позиция → клуб
    animationDiv.innerHTML = <p>Страна: ${player.country}</p>;
    cardDiv.innerHTML = '';

    setTimeout(() => {
        animationDiv.innerHTML += <p>Позиция: ${player.position}</p>;
    }, 1000);

    setTimeout(() => {
        animationDiv.innerHTML += <p>Клуб: ${player.club}</p>;
    }, 2000);

    setTimeout(() => {
        // Показ карточки игрока
        cardDiv.innerHTML = `
            <div class="card">
                <img src="${player.image}" alt="${player.name}" width="200">
                <h2>${player.name}</h2>
                <p>OVR: ${player.overall}</p>
                <p>${player.position}</p>
                <p>${player.country} | ${player.club}</p>
            </div>
        `;
    }, 3000);
}
