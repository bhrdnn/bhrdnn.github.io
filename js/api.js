const token = "8d40b1aa682240b0be24f05315ba3e46";

function loading(success) {
    var preloader = document.getElementById('preloader');
    if(success) {
        preloader.style.display = "block";
    }else{
        preloader.style.display = "none";
    }
}

function getStandings() {
  loading(true)
  return fetch('https://api.football-data.org/v2/competitions/2021/standings?season=2019', {
      method: "GET",
      withCredentials: true,
      headers: {
          "X-Auth-Token": token,
      'Origin': '',
      }
  })
  .then(response => {
      loading(false)
      return response.json();
  })
  .then(responseJson => {
      if (responseJson) {
          return Promise.resolve(responseJson);
      } else {
          return Promise.reject('not found');
      }
  });
}

function getTopscore() {
  loading(true)
  return fetch('https://api.football-data.org/v2/competitions/2021/scorers?season=2019', {
    method: "GET",
    withCredentials: true,
    headers: {
        "X-Auth-Token": token,
        'Origin': '',
    }
})
.then(response => {
    loading(false)
    return response.json();
})
.then(responseJson => {
    if (responseJson) {
        return Promise.resolve(responseJson);
    } else {
        return Promise.reject('not found');
    }
});
}

function getFixture() {
  loading(true)
  return fetch('https://api.football-data.org/v2/competitions/2021/matches?dateFrom=2020-09-12&dateTo=2020-09-15&status=SCHEDULED', {
    method: "GET",
    withCredentials: true,
    headers: {
        "X-Auth-Token": token,
        'Origin': '',
    }
})
.then(response => {
    loading(false)
    return response.json();
})
.then(responseJson => {
    if (responseJson) {
        return Promise.resolve(responseJson);
    } else {
        return Promise.reject('not found');
    }
});
}