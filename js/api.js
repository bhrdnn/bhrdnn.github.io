const token = "8d40b1aa682240b0be24f05315ba3e46";

function getStandings() {

    return fetch('https://api.football-data.org/v2/competitions/2021/standings?season=2019', {
      method: "GET",
      withCredentials: true,
      headers: {
          "X-Auth-Token": token
      }
  })
  .then(response => {
      return response.json();
  })
  .then(responseJson => {
      if (responseJson) {
          return Promise.resolve(responseJson);
      } else {
          return Promise.reject('not found');
      }
  });

    // return fetch('https://api.football-data.org/v2/competitions/2021/standings?season=2019', {
    //   headers: {
    //     'X-Auth-Token': token,
    //     'Origin': '',
    //   }
    // }).then((res) => {
    //   return res.json()
    // }).then((json) => {
    //   return json
    // }).catch((err) => {
    //   console.log('API error')
    // })
}

function getTopscore() {
  return fetch('https://api.football-data.org/v2/competitions/2021/scorers?season=2019', {
    method: "GET",
    withCredentials: true,
    headers: {
        "X-Auth-Token": token
    }
})
.then(response => {
    return response.json();
})
.then(responseJson => {
    if (responseJson) {
        return Promise.resolve(responseJson);
    } else {
        return Promise.reject('not found');
    }
});
    // return fetch('https://api.football-data.org/v2/competitions/2021/scorers?season=2019', {
    //   headers: {
    //     'X-Auth-Token': token,
    //     'Origin': '',
    //   }
    // }).then((res) => res.json()).then((json) => json).catch((err) => console.log(err))
}

function getFixture() {
  return fetch('https://api.football-data.org/v2/competitions/2021/matches?dateFrom=2020-09-12&dateTo=2020-09-15&status=SCHEDULED', {
    method: "GET",
    withCredentials: true,
    headers: {
        "X-Auth-Token": token
    }
})
.then(response => {
    return response.json();
})
.then(responseJson => {
    if (responseJson) {
        return Promise.resolve(responseJson);
    } else {
        return Promise.reject('not found');
    }
});
    // return fetch('https://api.football-data.org/v2/competitions/2021/matches?dateFrom=2020-09-12&dateTo=2020-09-15&status=SCHEDULED', {
    //   headers: {
    //     'X-Auth-Token': token,
    //     'Origin': '',
    //   }
    // }).then((res) => res.json()).then((json) => json).catch((err) => console.log(err))
}