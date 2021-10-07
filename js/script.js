function palRespond(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-activity').value.toLowerCase();
    console.log(userInput);

    userInput = userInput.replace(/my/g, 'your')

    if (userInput === '') {
        var responseString = 'Do you really have no ambition? <br>Type something in.'
    } else {
        let randomResponseArr = [
            `You seem capable. <br>I'm sure you can ${userInput}. <br>😘`,
            `I don't know man, <br>you get kinda tense <br>when you ${userInput}. <br>😬`,
            `Are you sure you even want <br>to ${userInput}? <br>🤨`,
            `You've got to dream bigger. <br>Anyone could ${userInput}. <br>🥱`,
            `I know you have it within you <br>to ${userInput}. <br>👌`,
            `I believe in you. <br>Now go ${userInput}. <br>🙌`,
            `You're going to kill it today! <br>Nobody is more prepared <br>to ${userInput} than you.<br>👍`,
            `I'm sorry, <br>I can't let you ${userInput}. <br>⭕`,
            `You want to ${userInput}? <br>You're going to miss <br>LOADS of great content <br>on instagram if you do that. <br>📱`,
            `Only true masters <br>can ${userInput}. <br>🧘‍♀️`,
        ]

        let x = Math.floor(Math.random() * 10);
        console.log(x)
        var responseString = randomResponseArr[x]
    }

    let palResponse = document.getElementById('pal-response');
    palResponse.innerHTML = responseString;
}



let userSubmit = document.getElementById('user-input');
userSubmit.addEventListener('submit', palRespond);