var headerRowForQuiz = function(quizNumber) {
  var row = document.createElement("tr")
  var nameCell = document.createElement("td")

  nameCell.innerHTML = "<h2>Quiz " + quizNumber +"</h2>"

  row.appendChild(nameCell)
  //row.appendChild(document.createElement("td"))

  return row
}

var getRowsForQuiz = function(quiz) {
  var rows = []
  var everyOther = "even"

  for (var qIndex = 0; qIndex < quiz.length; qIndex++) {
    if (quiz[qIndex] instanceof Array) {
      questions = quiz[qIndex]

      for (var i = 0; i < questions.length; i++) {
        var row = document.createElement("tr")
        var qCell = document.createElement("td")
        var aCell = document.createElement("td")

        qCell.innerHTML = questions[i][0]
        aCell.innerHTML = questions[i][1]

        qCell.classList.add(everyOther)
        aCell.classList.add(everyOther)

        if (everyOther == "even") {
          everyOther = "odd"
        } else {
          everyOther = "even"
        }

        row.appendChild(qCell)
        row.appendChild(aCell)

        rows.push(row)
      }
    } else {




      var question = quiz[qIndex]

      var row = document.createElement("tr")
      var questionCell = document.createElement("td")
      var answerCell = document.createElement("td")

      questionCell.innerHTML = question["question"]
      answerCell.innerHTML = question["answers"][question["correctIndex"]]

      questionCell.classList.add(everyOther)
      answerCell.classList.add(everyOther)

      if (everyOther == "even") {
          console.log("event")
          everyOther = "odd"
      } else {

          console.log("odd")
        everyOther = "even"
      }

      row.appendChild(questionCell)
      row.appendChild(answerCell)

      rows.push(row)
    }
  }

  return rows
}

var buildAnswerKey = function() {
  var tbody = document.getElementById("answerKey")

  var quizKeys = Object.keys(quizCollection)
  for (var i = 0; i < quizKeys.length; i++) {
    var quizRows = getRowsForQuiz(quizCollection[quizKeys[i]])

    tbody.appendChild(headerRowForQuiz(quizKeys[i]))
    for (var row = 0; row < quizRows.length; row++) {
      tbody.appendChild(quizRows[row])
    }
  }
}

window.addEventListener("load", function() {
  buildAnswerKey()
})
