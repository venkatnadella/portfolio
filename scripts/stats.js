const statsData = {
  team: [
    { label: "Matches Played", value: 48 },
    { label: "Wins", value: 32 },
    { label: "Losses", value: 12 },
    { label: "Draws", value: 4 },
    { label: "Win Percentage", value: "66.7%" }
  ],
  topRunScorers: [
    { player: "Virat Sharma", runs: 1450, highest: "112*" },
    { player: "Rohit Kumar", runs: 1320, highest: "101" },
    { player: "Ajay Singh", runs: 1205, highest: "98" }
  ],
  highestScores: [
    { player: "Virat Sharma", score: "112*", opponent: "Challengers" },
    { player: "Rohit Kumar", score: "101", opponent: "Warriors" },
    { player: "Ajay Singh", score: "98", opponent: "Titans" }
  ],
  topWicketTakers: [
    { player: "Manish Patel", wickets: 56, best: "5/21" },
    { player: "Deepak Joshi", wickets: 49, best: "4/12" },
    { player: "Ravi Yadav", wickets: 45, best: "4/18" }
  ],
  bestEconomy: [
    { player: "Manish Patel", economy: 4.2, overs: 120 },
    { player: "Deepak Joshi", economy: 4.5, overs: 110 },
    { player: "Ravi Yadav", economy: 4.7, overs: 98 }
  ]
};

function renderStats() {
  const root = document.getElementById('stats-root');
  root.innerHTML += `
    <section class="team-stats">
      <h2>Team Stats</h2>
      <div class="team-stats-cards">
        ${statsData.team.map(stat => `
          <div class="team-stat-card">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="player-stats">
      <h2>Top Run Scorers</h2>
      <table class="stats-table">
        <tr><th>Player</th><th>Runs</th><th>Highest Score</th></tr>
        ${statsData.topRunScorers.map(scorer => `
          <tr>
            <td>${scorer.player}</td>
            <td>${scorer.runs}</td>
            <td>${scorer.highest}</td>
          </tr>
        `).join('')}
      </table>
      <h2>Highest Individual Scores</h2>
      <table class="stats-table">
        <tr><th>Player</th><th>Score</th><th>Opponent</th></tr>
        ${statsData.highestScores.map(score => `
          <tr>
            <td>${score.player}</td>
            <td>${score.score}</td>
            <td>${score.opponent}</td>
          </tr>
        `).join('')}
      </table>
      <h2>Top Wicket Takers</h2>
      <table class="stats-table">
        <tr><th>Player</th><th>Wickets</th><th>Best Bowling</th></tr>
        ${statsData.topWicketTakers.map(bowler => `
          <tr>
            <td>${bowler.player}</td>
            <td>${bowler.wickets}</td>
            <td>${bowler.best}</td>
          </tr>
        `).join('')}
      </table>
      <h2>Best Economy Rates</h2>
      <table class="stats-table">
        <tr><th>Player</th><th>Economy</th><th>Overs Bowled</th></tr>
        ${statsData.bestEconomy.map(econ => `
          <tr>
            <td>${econ.player}</td>
            <td>${econ.economy}</td>
            <td>${econ.overs}</td>
          </tr>
        `).join('')}
      </table>
    </section>
  `;
}

document.addEventListener('DOMContentLoaded', renderStats);
