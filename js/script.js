/*------------------Module 1 PAL user response function-------------------*/ 
function palRespond(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-activity').value.toLowerCase();
    console.log(userInput);

    /*--------Response syntax modifier--------*/
    userInput = userInput.replace(/my/g, 'your');
    userInput = userInput.replace(/ing/g, '');

    /*---Empty submission response generator---*/
    if (userInput === '') {
        var responseString = 'Do you really have no ambition? <br>Type something in.';
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
            `You want to ${userInput}? <br>You're going to miss <br>LOADS of great content <br>on Instagram if you do that. <br>📱`,
            `Only true masters <br>can ${userInput}. <br>🧘‍♀️`,
        ];
        /*--------Random index generator--------*/
        let x = Math.floor(Math.random() * 10);
        console.log(x);
        var responseString = randomResponseArr[x];
    }
    /*------Assign response string to HTML------*/
    let palResponse = document.getElementById('pal-response');
    palResponse.innerHTML = responseString;
}
/*--------Event listener (submit)--------*/
let userSubmit = document.getElementById('user-input');
userSubmit.addEventListener('submit', palRespond);


/*----------------Module 2 PAL video reveal and play---------------*/
/*-------------------Reveals 'exist' video and plays-------------------*/ 
function playWlex(event) {
    var currentWlexValue = wlexButton.value;
    if (currentWlexValue === 'not-playing' && luckButton.value !== 'playing' && intuitionButton.value !== 'playing') {
        console.log('clicked wl-ex');
        wlexButton.value = 'playing';
        let wlexVid = document.getElementById('wl-ex');
        wlexVid.style.display = 'inline';
        wlexVid.play();
        wlexButton.style.boxShadow = '-3px -3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = '<p>Waking Life, LINKLATER (2001)</p>';
    } else {
        wlexButton.value = 'not-playing';
        let wlexVid = document.getElementById('wl-ex');
        wlexVid.style.display = 'none';
        wlexVid.pause();
        wlexButton.style.boxShadow = '3px 3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = 'Maybe this will help...';
    }
}
/*----------------Event listener for 'exist' button click--------------*/ 
var wlexButton = document.getElementById('exist');
wlexButton.addEventListener('click', playWlex);

/*-------------------Reveals 'luck' video and plays-------------------*/ 
function playLuck(event) {
    var currentLuckValue = luckButton.value;
    if (currentLuckValue === 'not-playing' && wlexButton.value !== 'playing' && intuitionButton.value !== 'playing') {
        console.log('clicked luck');
        luckButton.value = 'playing';
        let luckVid = document.getElementById('luck');
        luckVid.style.display = 'inline';
        luckVid.play();
        luckVid.volume = 0.3;
        luckButton.style.boxShadow = '-3px -3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = '<p>Luck, School of Life (2018)</p>';
    } else {
        luckButton.value = 'not-playing';
        let luckVid = document.getElementById('luck');
        luckVid.style.display = 'none';
        luckVid.pause();
        luckButton.style.boxShadow = '3px 3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = 'Maybe this will help...';
    }
}
/*----------------Event listener for 'luck' button click--------------*/ 
var luckButton = document.getElementById('luck-sol');
luckButton.addEventListener('click', playLuck);

/*-------------------Reveals 'intuition' video and plays-------------------*/ 
function playIntuition(event) {
    var currentIntValue = intuitionButton.value;
    if (currentIntValue === 'not-playing' && wlexButton.value !== 'playing' && luckButton.value !== 'playing') {
        console.log('clicked intuition');
        intuitionButton.value = 'playing';
        let intuitionVid = document.getElementById('intuition');
        intuitionVid.style.display = 'inline';
        intuitionVid.play();
        intuitionVid.volume = 0.6;
        intuitionButton.style.boxShadow = '-3px -3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = '<p>Intuition, Alan Watts (circa 1973)</p>';
    } else {
        intuitionButton.value = 'not-playing';
        let intuitionVid = document.getElementById('intuition');
        intuitionVid.style.display = 'none';
        intuitionVid.pause();
        intuitionButton.style.boxShadow = '3px 3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = 'Maybe this will help...';
    }
}
/*----------------Event listener for 'intuition' button click--------------*/ 
var intuitionButton = document.getElementById('int-aw');
intuitionButton.addEventListener('click', playIntuition);