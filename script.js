var anniversaryMonth = 7
var anniversaryDay = 13

var anniversary = false

var today = new Date();
var currentMonth = today.getMonth()
var currentDay = today.getDate()

var timer = document.getElementById("timer")
var dayCell = document.getElementById("days")
var hourCell = document.getElementById("hours")
var minuteCell = document.getElementById("minutes")
var secondCell = document.getElementById("seconds")

var nextAnniversary = new Date(today.getFullYear(), anniversaryMonth, anniversaryDay)

if (nextAnniversary.getMonth() == today.getMonth() && nextAnniversary.getDate() == today.getDate()) {
  anniversary = true
}

if (nextAnniversary.getMonth() <= today.getMonth() && nextAnniversary.getDate() <= today.getDate()) {
  nextAnniversary.setFullYear(nextAnniversary.getFullYear() + 1)
}

String.prototype.format = function(arr) {
  let newString = this
  arr.forEach(function(item) {
    newString = newString.replace("%", item)
  })

  return newString
}

var timeUntil = function(date) {
  let seconds = Math.floor((date.getTime() - new Date().getTime()) / 1000)

  let minutes = function(seconds) {
    return Math.floor(seconds / 60 % 60)
  }

  let hours = function(seconds) {
    return Math.floor(seconds / 60 / 60 % 24)
  }

  let days = function(seconds) {
    return Math.floor(seconds / 60 / 60 / 24)
  }

  time = [seconds % 60, minutes(seconds), hours(seconds), days(seconds)]

  time.forEach(function(item, index, arr) {
    if (item.toString().length < 2) {
      time[index] = "0" + item
    }
  })

  return time
}

var timeTag = document.getElementById("time")

var updateTimer = function() {
  today = new Date()
  let seed = Math.floor((today.getHours() + 1) * (today.getMinutes() + 1) * (today.getSeconds() + 1) / 1000)
  timer.style["color"] = "rgb(%, %, %)".format([0 + seed, 200 - seed, 100 / seed])


  var time = timeUntil(nextAnniversary)
  dayCell.innerHTML = time[3]
  hourCell.innerHTML = time[2]
  minuteCell.innerHTML = time[1]
  secondCell.innerHTML = time[0]
}
updateTimer()
setInterval(updateTimer, 1000)
