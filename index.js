/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let splitTime = time.split(':')
  let parseTime = parseInt(splitTime)
  if (parseTime < 12 && parseTime >= 0) {
    return "Good Morning";
  }
  else if (parseTime >= 12 && parseTime < 17){
    return "Good Afternoon";
  }
  else if (parseTime >= 17 && parseTime < 24) {
    return "Good Evening";
  }
  else {
    return "Error";
  }
}

function displayMessage(text) {
  document.getElementById("greeting").textContent = text
}
