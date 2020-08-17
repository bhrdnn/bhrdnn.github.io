const token = "8d40b1aa682240b0be24f05315ba3e46";

function getFromCache(endpoint) {
  return new Promise((resolve, reject) => {
    if ("caches" in window) {
      caches.match(endpoint).then((res) => {
        if (res) {
          return resolve(res.json())
        } else {
          return reject();
        }
      })
    } else {
      return reject()
    }
  })
}

function getStandings() {
  return getFromCache('https://api.football-data.org/v2/competitions/2021/standings').then((json) => {
    return json
  }).catch(() => {
    return fetch('https://api.football-data.org/v2/competitions/2021/standings', {
      headers: {
        'X-Auth-Token': token,
        'Origin': '',
      }
    }).then((res) => {
      return res.json()
    }).then((json) => {
      return json
    }).catch((err) => {
      console.log('API error')
    })
  })
}

function getTopscore() {
  return getFromCache('https://api.football-data.org/v2/competitions/2021/scorers').then((json) => {
    return json
  }).catch(() => {
    return fetch('https://api.football-data.org/v2/competitions/2021/scorers', {
      headers: {
        'X-Auth-Token': token,
        'Origin': '',
      }
    }).then((res) => res.json()).then((json) => json).catch((err) => console.log(err))
  })
}

function getFixture() {
  return getFromCache('https://api.football-data.org/v2/competitions/2001/matches?status=SCHEDULED').then((json) => {
    return json
  }).catch(() => {
    return fetch('https://api.football-data.org/v2/competitions/2001/matches?status=SCHEDULED', {
      headers: {
        'X-Auth-Token': token,
        'Origin': '',
      }
    }).then((res) => res.json()).then((json) => json).catch((err) => console.log(err))
  })
}