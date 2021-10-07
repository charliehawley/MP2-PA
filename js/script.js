var userInput = document.getElementById('user-input').value;

function palRespond(event) {
    event.preventDefault();
    var userActivity = userInput.elements['user-activity'].value;
    console.log(userActivity)
    /*let responseDialogue = palResponses[0];
    let response = document.getElementById('pal-response');
    console.log(response.value);
    response = responseDialogue;*/
}

const palResponses = [
    `Are you kidding? You know you can't ${userActivity}.`, 
    `You seem very capable. You ${userActivity}.`,
    `You try to ${userActivity} but a sudden migraine keeps you in stasis.`];

let userSubmit = document.getElementById('submit');
userSubmit.addEventListener('submit', palRespond);