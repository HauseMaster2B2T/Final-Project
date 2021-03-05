let myMessage
myMessage = 'INSTRUCTIONS: You need to enter your age and day of week (capitalizing first letter of weekday), then select the movie. Finally, last step is to click the buttons in this order: Age, Day, and Movie. Then the program will print the ticket price to the screen and give you the option to print the page in hard copy.'
alert(myMessage)
// Gets user input for age
document.getElementById('button').addEventListener('click', age)
// Stores user input in the variable age
function age () {
  age = document.getElementById('input').value
}
// Gets user input for day
document.getElementById('button2').addEventListener('click', day)
// Stores user input in the variable day
function day () {
  day = document.getElementById('input2').value
// Prints day to screen
  document.getElementById('result2').innerHTML = day
}
// Loop to display available movies
let movies = ['The Croods 2', 'Army of Darkness', 'Freaky', 'Stark Trek VI']
let text = ''
let i
for (i = 0; i < movies.length; i++) {
  text += movies[i] + '<br>'
}
document.getElementById('myloop').innerHTML = text
// Gets user input for movie
document.getElementById('button3').addEventListener('click', movie)
// Stores user input in the variable movie
function movie () {
  movie = document.getElementById('input3').value
// Prints movie to screen
  document.getElementById('result3').innerHTML = movie
  ticket()
}
// Compare age and day to each if else if statement
function ticket () {
  let price
    if (day == 'Tuesday') {
     price = 'Cheapie Tuesdays $5.00'
  } else if (age >= 65) {
     price = 'Seniors $10.00'
  } else if (age <= 12) {
     price = 'Juniors $8.00'
  } else {
     price = 'General Admission $13.00'
  }
    document.getElementById('demo').innerHTML = price
}
