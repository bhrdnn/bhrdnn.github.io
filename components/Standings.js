class Standings extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getStandings().then((data) => {
      this.innerHTML = ''
      let row = '';
      data.standings[0].table.forEach((el, i) => {
        row += `
            <tr>
              <td>${el.position}</td>
              <td>${el.team.name}</td>
              <td>${el.playedGames}</td>
              <td>${el.won}</td>
              <td>${el.draw}</td>
              <td>${el.lost}</td>
              <td>${el.goalsFor}</td>
              <td>${el.goalsAgainst}</td>
              <td>${el.goalDifference}</td>
              <td>${el.points}</td>
            </tr>
      `;
      })
      this.innerHTML = `
      <h5 style="font-weight:600; margin-top:40px">Tables</h5>
      <a href="#" class="brand-logo" id="logo-container"><img src="img/icons/pl.png" alt="PL logo" style="width:20%"></a>
      <table class="responsive-table centered">
      <thead>
        <tr>
          <th>Position</th>
          <th>Club</th>
          <th>Played</th>
          <th>Won</th>
          <th>Draw</th>
          <th>Lost</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        ${row}
      </tbody>
    </table>`
    })
  }

}

customElements.define('standing-component', Standings)