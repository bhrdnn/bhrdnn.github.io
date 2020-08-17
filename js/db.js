const db = idb.open("footballDB", 1, (upgradeDB) => {
  if (!upgradeDB.objectStoreNames.contains("savedmatch")) {
    let savedmatches = upgradeDB.createObjectStore("savedmatch", {
      keyPath: 'id'
    })
  }
})

function addSavedMatch(id, utcDate, homeTeam, awayTeam, btn) {
  db.then((db) => {
    let tx = db.transaction('savedmatch', 'readwrite')
    let store = tx.objectStore('savedmatch')
    let item = {
      id: id,
      utcDate: utcDate,
      homeTeam: homeTeam,
      awayTeam: awayTeam,
    }
    store.add(item)
    return tx.complete;
  }).then(() => {
    btn.innerHTML = 'Saved';
    btn.classList.add("disabled");
    return Promise.resolve('oke')
  }).catch((err) => console.log(err))
}

function isSaved(id) {
  return db.then(function (db) {
    let tx = db.transaction('savedmatch', 'readonly');
    let store = tx.objectStore('savedmatch');
    return store.get(id);
  }).then(function (val) {
    return Promise.resolve(val === undefined)
  })
}

function getSavedMatch() {
  return db.then(function (db) {
    let tx = db.transaction('savedmatch', 'readonly');
    let store = tx.objectStore('savedmatch');
    return store.getAll();
  })
}


function removeSavedMatch(id) {
  db.then((db) => {
    let tx = db.transaction('savedmatch', 'readwrite');
    let store = tx.objectStore('savedmatch')
    store.delete(id)
    return tx.complete
  }).then(() => {
    document.getElementById(id).remove();
  })
}