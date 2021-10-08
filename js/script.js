/*------------------PAL user response function-------------------*/ 
function palRespond(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-activity').value.toLowerCase();
    console.log(userInput);

    /*--------Response syntax modifier--------*/
    userInput = userInput.replace(/my/g, 'your')
    userInput = userInput.replace(/ing/g, '')

    /*---Empty submission response generator---*/
    if (userInput === '') {
        var responseString = 'Do you really have no ambition? <br>Type something in.'
    } else {
        /*--------Random response array--------*/
        let randomResponseArr = [
            `You seem capable. <br>I'm sure you can ${userInput}. <br>😘`,
            `I don't know man, <br>you get kinda tense <br>when you ${userInput}. <br>😬`,
            `Are you sure you even want <br>to ${userInput}? <br>🤨`,
            `You've got to dream bigger. <br>Anyone can ${userInput}. <br>🥱`,
            `I know you have it within you <br>to ${userInput}. <br>👌`,
            `I believe in you. <br>Now go ${userInput}. <br>🙌`,
            `You're going to kill it today! <br>Nobody is more prepared <br>to ${userInput} than you.<br>👍`,
            `I'm sorry, <br>I can't let you ${userInput}. <br>⭕`,
            `You want to ${userInput}? <br>You're going to miss <br>LOADS of great content <br>on instagram if you do that. <br>📱`,
            `Only true masters <br>can ${userInput}. <br>🧘‍♀️`,
        ]
        /*--------Random index generator--------*/
        let x = Math.floor(Math.random() * 10);
        console.log(x)
        var responseString = randomResponseArr[x]
    }
    /*------Assign response string to HTML------*/
    let palResponse = document.getElementById('pal-response');
    palResponse.innerHTML = responseString;
}
/*--------Event listener (submit)--------*/
let userSubmit = document.getElementById('user-input');
userSubmit.addEventListener('submit', palRespond);


/*----------------Module 2 video reveal and play---------------*/
/*-------------------Reveals video and plays-------------------*/ 
function playWlex(event) {
    console.log('clicked wl-ex')
    var wlexVid = document.getElementById('wl-ex');
    wlexVid.style.display = 'inline';
    wlexVid.play();
    wlexButton.style.boxShadow = '-3px -3px 3px #000';
    let palC2Text = document.getElementById('vid-credit');
    palC2Text.innerHTML = '<p>Waking Life - LINKLATER 2001</p>'
}
/*----------------Event listener for button click--------------*/ 
var wlexButton = document.getElementById('exist');
wlexButton.addEventListener('click', playWlex);