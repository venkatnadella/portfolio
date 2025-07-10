const matchesData = {
  ongoing: [
    {
      title: "Dynamos vs Titans",
      date: "July 9, 2025",
      status: "2nd Innings - Dynamos Batting",
      details: "Dynamos: 120/3 (15.2 ov)"
    },
    {
      title: "Challengers vs Warriors",
      date: "July 10, 2025",
      status: "1st Innings - Challengers Batting",
      details: "Challengers: 180/4 (20 ov)"
    }

  ],
  upcoming: [
    {
      title: "Dynamos vs Challengers",
      date: "July 20, 2025",
      status: "Starts at 10:00 AM",
      details: "Venue: City Stadium"
    },
    {
      title: "Titans vs Warriors",
      date: "July 22, 2025",
      status: "Starts at 3:00 PM",
      details: "Venue: National Arena"
    }
  ],
  past: [
    {
      title: "Dynamos vs Warriors",
      date: "July 1, 2025",
      status: "Dynamos won by 5 wickets",
      details: "Warriors: 145/8, Dynamos: 146/5"
    },
    {
      title: "Challengers vs Titans",
      date: "July 5, 2025",
      status: "Titans won by 3 runs",
      details: "Challengers: 160/7, Titans: 163/6"
    }
  ]
};

function renderMatches(tab) {
  const container = document.getElementById('matches-cards-container');
  container.innerHTML = '';
  const matches = matchesData[tab];
  if (!matches || matches.length === 0) {
    container.innerHTML = `<div class="match-card"><div>No matches in this category.</div></div>`;
    return;
  }
  matches.forEach(match => {
    container.innerHTML += `
      <div class="match-card">
        <div class="match-title">${match.title}</div>
        <div class="match-date">${match.date}</div>
        <div class="match-status">${match.status}</div>
        <div>${match.details}</div>
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.matches-tab');
  let currentTab = 'ongoing';
  renderMatches(currentTab);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      renderMatches(currentTab);
    });
  });
});