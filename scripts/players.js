const players = [
    { name: "Aaditya Varadarajan", age: "33y 350d", role: "Batsman", image: "assets/img/jersey.png" },
    { name: "Ali Nadeem", age: "32y 242d", role: "Bowler", image: "assets/img/jersey.png" },
    { name: "Anop Santosh", age: "34y 16d", role: "Allrounder", image: "assets/img/player1.jpg" },
    { name: "Arun Kumar", age: "30y 120d", role: "Batsman", image: "assets/img/jersey.png" },
    { name: "Ashish Kumar", age: "29y 200d", role: "Bowler", image: "assets/img/jersey.png" },
    { name: "Bharat Singh", age: "31y 150d", role: "Allrounder", image: "assets/img/jersey.png" },
    { name: "Chandranath Suresh", age: "28y 90d", role: "Wicketkeeper", image: "assets/img/jersey.png" },
    { name: "Deepak Sharma", age: "27y 300d", role: "Batsman", image: "assets/img/jersey.png" },
    { name: "Eshwar Prasad", age: "26y 180d", role: "Bowler", image: "assets/img/jersey.png" },
    { name: "Feroz Khan", age: "35y 100d", role: "Allrounder", image: "assets/img/jersey.png" },
  // ...more players
];

function renderPlayers(filteredPlayers) {
  const playersList = document.getElementById('players-list');
  playersList.innerHTML = '';
  filteredPlayers.forEach(player => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';
    playerCard.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-img"/>
      <div class="player-info">
        <div class="player-name">${player.name}</div>
        <div class="player-role">${player.role}</div>
        <div class="player-age">Age: ${player.age}</div>
      </div>
    `;
    playersList.appendChild(playerCard);
  });
}

function getSelectedRoles() {
  return Array.from(document.querySelectorAll('.role-filter:checked')).map(cb => cb.value);
}

document.querySelectorAll('.role-filter').forEach(cb => {
  cb.addEventListener('change', () => {
    const selectedRoles = getSelectedRoles();
    renderPlayers(players.filter(p => selectedRoles.includes(p.role)));
  });
});

// Initial render
renderPlayers(players);