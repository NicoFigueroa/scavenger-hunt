var showRelevantClue = function() {
	var loc = window.location.toString()
	var clue = loc.substring(loc.lastIndexOf("?"))
	var clueNumber = clue.match(/=.*/).toString().replace("=", "")
	
	console.log(clueNumber)

	document.getElementById(clueNumber).classList.toggle("hide")
}

window.addEventListener("load", function() {
	showRelevantClue()
})