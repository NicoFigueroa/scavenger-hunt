var startColor = [218,245,244]
var endColor = [255,79,0]

var currentClue = null
//var scavengerTime = new Date(Date.now() - 5000)
//var scavengerTime = new Date(2020, 4, 4, 20, 37, 40)
var scavengerTime = new Date(2020, 4, 5, 16)

var calculateCurrentColor = function() {
	var clues = document.getElementsByTagName("div").length
	var currentColor = []
	for (var i = 0; i < startColor.length; i++) {
		//var dif = endColor[i] - startColor[i]
		//console.log(dif)
		//currentColor.push(Math.floor(startColor[i] + (dif / clues) * (currentClue - 1)))
		if (i == 0) {
			currentColor.push(startColor[i] + 3 * currentClue)
		}
		else {
			currentColor.push(startColor[i] - 10 * currentClue)
		}
	}

	return currentColor
}

var initialize = function() {
	//var color = calculateCurrentColor()
	var randomColor = (currentClue * 10) + 120
	document.body.style = "background-color: hsl(" + randomColor + ", 50%, 50%);"
}

var showRelevantClue = function() {
	var loc = window.location.toString()
	var clue = loc.substring(loc.lastIndexOf("?"))
	var clueNumber = clue.match(/=.*/)

	if (!clueNumber) {
		window.location = "index.html?clue=897341"
	} else {
		clueNumber = clueNumber.toString().replace("=", "")
	}

	currentClue = clueNumber

	switch (clueNumber) {
		case "427906":
			setTimeout(function() {
				document.getElementById("aptest").classList.add("hide")
				document.getElementById("psych").classList.remove("hide")
			}, 15000)
	}


	var clueDiv = document.getElementById(clueNumber)
	if (clueDiv) {
		clueDiv.classList.toggle("hide")
	} else {
	}
}

var timeUntilScavenger = function() {
	var secUntil = (scavengerTime.getTime() - Date.now()) / 1000
	var hours = Math.floor((secUntil / 60 / 60))
	var min = Math.floor((secUntil / 60 ) % 60)
	var sec = Math.floor((secUntil % 60))

	if (sec.toString().length < 2) {
		sec = "0" + sec
	}

	if (min.toString().length < 2) {
		min = "0" + min
	}

	if (hours.toString().length < 2) {
		hours = "0" + hours
	}

	return {hours: hours, minutes: min, seconds: sec, totalSeconds: Math.floor(secUntil)}
}

var updateCountdownTimer = function() {

	if (isScavengerTime()) {
		//document.getElementById("countdown").classList.add("hide")
		//document.getElementById("104568").classList.remove("hide")
		window.location = "index.html?clue=897341"
	} else {
		var remaining = timeUntilScavenger()

		var secCell = document.getElementById("seconds")
		var minuteCell = document.getElementById("minutes")
		var hourCell = document.getElementById("hours")

		secCell.innerHTML = remaining.seconds
		minuteCell.innerHTML = remaining.minutes
		hourCell.innerHTML = remaining.hours
	}
}

var isScavengerTime = function() {
	return (scavengerTime.getTime() - Date.now()) <= 0
}

window.addEventListener("load", function() {
	if (!isScavengerTime()) {
		updateCountdownTimer()
		document.getElementsByTagName("body")[0].classList.add("count")
		document.getElementById("countdown").classList.toggle("hide")

		setInterval(function() {
			updateCountdownTimer()
		}, 1000)
	} else {
		showRelevantClue()
		initialize()
	}


})
