class TopScorer extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getTopscore().then((data) => {
      this.innerHTML = ''
      let row = '';
      data.scorers.forEach((el, i) => {
        row += `
          <tr>
            <td>${i+1}</td>
            <td>${el.player.name}</td>
            <td>${el.team.name}</td>
            <td>${el.player.nationality}</td>
            <td>${el.player.position}</td>
            <td>${el.numberOfGoals}</td>
          </tr>
      `;
      })
      this.innerHTML = `
      <h5 style="font-weight:600; margin-top:40px">Top Scorer</h5>
      <a href="#" class="brand-logo" id="logo-container"><img src="img/icons/pl.png" alt="PL logo" style="width:20%"></a>
      <table class="responsive-table centered">
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Club</th>
          <th>Nationality</th>
          <th>Position</th>
          <th>Goals</th>
        </tr>
      </thead>

      <tbody>
        ${row}
      </tbody>
    </table>`
    })
  }

}

customElements.define('topscore-component', TopScorer)