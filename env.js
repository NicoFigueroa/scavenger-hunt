var tbody = document.getElementById("quizList")
for (var as = 0; as < quizzes.length; as++) {
    for (var i = 0; i < quizzes[as].length; i++) {
      var quizId = quizzes[as][i]

      var row = document.createElement("tr")
      var checkCell = document.createElement("td")
      var textCell = document.createElement("td")

      var checkBox = document.createElement("input")
      checkBox.id = quizId
      checkBox.type = "checkbox"

      checkCell.appendChild(checkBox)

      var quizText = document.createElement("p")
      quizText.innerHTML = "Quiz " + quizId

      textCell.appendChild(quizText)

      row.appendChild(checkCell)
      row.appendChild(textCell)

      tbody.appendChild(row)
      console.log()
}
}

var getCheckedQuizzes = function() {
  var checkBoxes = tbody.getElementsByTagName("input")

  var quizList = []

  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      quizList.push(checkBoxes[i].id)
    }
  }

  return quizList
}


var genTest = function() {
  getCheckedQuizzes()
}


var genKey = function() {
  var quizList = getCheckedQuizzes()

  if (quizList.length <= 0) {
    return;
  }

  var url = "key.html?"

  for (var i = 0; i < quizList.length; i++) {
    url += quizList[i] + "&"
  }
  window.location = url
}
