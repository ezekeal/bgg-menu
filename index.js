var $ = require('jquery')

window.onload = function () {
  var menu = document.getElementById('bgg-menu')
  menu.innerHTML += '<p>...loading games</p>'
  var games = [
    13, // Catan
    104710 // Wiz-War
  ]

  getGameData(games, function (data) {
    console.log(data)
    var list = document.createElement('ul')
    data.map(function (d) {
      var item = document.createElement('li')

      var title = document.createElement('p')
      title.textContent = d.name[0].$.value

      var img = document.createElement('img')
      img.setAttribute('src', d.thumbnail)

      item.appendChild(title)
      item.appendChild(img)

      list.appendChild(item)
    })
    menu.appendChild(list)
  })
}

function getGameData (gameList, cb) {
  var url = 'http://bgg-api.herokuapp.com/api/v1/thing?id='

  gameList.map(function (g, i) {
    if (i === 0) {
      url += g
    } else {
      url += ',' + g
    }
  })

  $.get(url, function (res) {
    cb(res.items.item)
  })
}
