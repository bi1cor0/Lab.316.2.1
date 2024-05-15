let answer;

function startBox() {
    answer = window.prompt("Hello! I am an alert box!!");
    console.log(answer);
    return answer;
  }
  
  document.getElementById(`openWindowBtn`).addEventListener(`click`,startBox);