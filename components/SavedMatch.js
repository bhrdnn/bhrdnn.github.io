class SavedMatch extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    GetSavedMatch().then((data) => {
      this.innerHTML = `
      <h5 style="font-weight:600; margin-top:40px">Saved Match</h5>
      <a href="#" class="brand-logo" id="logo-container"><img src="img/icons/cl.png" alt="CL logo" style="width:13%"></a>
      `
      data.forEach((el, i) => {
        this.innerHTML += `
        <ul class="collection white-text" id="${el.id}">
          <li class="collection-item pink darken-4 center">
          <div class="row">
            <div class="col s12 m4 l2">
            <span>${el.utcDate}</span>
            </div>
            <div class="col s12 m4 l2">
            <span>${el.homeTeam}</span>
            </div>
            <div class="col s12 m4 l2">
            <span>02:00</span>
            </div>
            <div class="col s12 m4 l2">
            <span>${el.awayTeam}</span>
            </div>
            <div class="col s12 m4 l4">
            <button id = "fav-btn" onclick = "M.toast({html: 'Match deleted!', classes: 'rounded', displayLength: 600}), removeSavedMatch(${el.id}, '${el.utcDate}', '${el.homeTeam}', '${el.awayTeam}')" class="btn purple darken-4 secondary-content"> Delete </button>
            </div>
          </div>
          </li>
        </ul>
      `;
      })
    })
  }

}

customElements.define('savedmatch-component', SavedMatch)