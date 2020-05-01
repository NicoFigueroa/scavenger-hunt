var startColor = [218,245,244]
var endColor = [255,79,0]

var currentClue = null


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

	console.log(currentColor)

	return currentColor
}

var initialize = function() {
	//var color = calculateCurrentColor()
	var randomColor = (currentClue * 10) + 120
	console.log(randomColor)
	document.body.style = "background-color: hsl(" + randomColor + ", 50%, 50%);"
}

var showRelevantClue = function() {
	var loc = window.location.toString()
	var clue = loc.substring(loc.lastIndexOf("?"))
	var clueNumber = clue.match(/=.*/).toString().replace("=", "")

	currentClue = clueNumber
	console.log("Showing clue: " + currentClue)

	var clueDiv = document.getElementById(clueNumber)
	if (clueDiv) {
		clueDiv.classList.toggle("hide")

	}
}

window.addEventListener("load", function() {
	showRelevantClue()
	initialize()
})