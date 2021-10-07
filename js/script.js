function palRespond(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-activity').value;
    console.log(userInput);
    let palResponse = document.getElementById('pal-response');
    palResponse.innerHTML = userInput;
}

let userSubmit = document.getElementById('user-input');
userSubmit.addEventListener('submit', palRespond);