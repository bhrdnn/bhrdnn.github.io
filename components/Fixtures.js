class Fixtures extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    getFixture().then((data) => {
      this.innerHTML = `
      <h5 style="font-weight:600; margin-top:40px">Fixtures</h5>
      <a href="#" class="brand-logo" id="logo-container"><img src="img/icons/pl.png" alt="PL logo" style="width:20%"></a>
      `
      data.matches.forEach((el, i) => {
        el.homeTeam = el.homeTeam.name;
        el.awayTeam = el.awayTeam.name;

        isSaved(el.id).then((isSaved) => {
          if (isSaved) {
            var btn = `<button onclick="M.toast({html: 'Match saved!', classes: 'rounded', displayLength: 600}), addSavedMatch(${el.id}, '${el.utcDate}', '${el.homeTeam}', '${el.awayTeam}', this)" class="btn purple darken-4 secondary-content"> Save Match </button>`;
          } else {
            var btn = `<button onclick="addSavedMatch(${el.id}, '${el.utcDate}', '${el.homeTeam}', '${el.awayTeam}', this)" class="btn disabled secondary-content"> Saved </button>`;
          }
          this.innerHTML += `
            <ul class="collection white-text">
              <li class="collection-item pink darken-4 center">
              <div class="row">
                <div class="col s12 m2 l2">
                <span>${el.utcDate}</span>
                </div>
                <div class="col s12 m2 l2">
                <span>${el.homeTeam}</span>
                </div>
                <div class="col s12 m1 l2">
                <span>02:00</span>
                </div>
                <div class="col s12 m2 l2">
                <span>${el.awayTeam}</span>
                </div>
                <div class="col s12 m5 l4">
                <span>${btn}</span>
                </div>
              </div>
              </li>
            </ul>
      `;
        })

      })
    })
  }

}

customElements.define('fixture-component', Fixtures)