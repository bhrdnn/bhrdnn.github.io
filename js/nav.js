document.addEventListener("DOMContentLoaded", () => {
  let nav = `
  <li><a href="#tables">Tables</a></li>
  <li><a href="#topscorer">Top Scorer</a></li>
  <li><a href="#fixtures">Fixtures</a></li>
  <li><a href="#saved">Saved Match</a></li>
  `;
  let sidenav = document.querySelectorAll(".sidenav")
  M.Sidenav.init(sidenav)

  document.querySelectorAll('.topnav, .sidenav').forEach((el) => {
    el.innerHTML = nav;
  })

  document.querySelectorAll('.sidenav a, .topnav a').forEach((el) => {
    el.addEventListener("click", function (event) {
      let sidenav = document.querySelector(".sidenav");
      M.Sidenav.getInstance(sidenav).close();
      page = event.target.getAttribute("href").substr(1);
      loadPage(page);
    });
  })

  let content = document.getElementById('content')
  const loadPage = (page) => {
    return fetch(`pages/${page}.html`).then((res) => {
      return res.text()
    }).then((text) => {
      content.innerHTML = text
    }).catch((err) => {
      content.innerHTML = "<p>Ups.. the pages cant be access.</p>";
    })
  }

  let page = window.location.hash.substr(1);
  if (page === "") page = "tables";
  loadPage(page)
})