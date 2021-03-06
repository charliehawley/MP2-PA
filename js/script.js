//----------------MODULE 1 PAL user response function-----------------
/**
 * Generates randomised response with user input and template literal
 * @param {string} event - A string param
 * @returns {string} - A new string with user input
 */
function palRespond(event) {
    event.preventDefault();
    let userInput = document.getElementById('user-activity').value.toLowerCase();

    //--------Response syntax modifier--------
    userInput = userInput.replace(/ my /g, ' your ');
    userInput = userInput.replace(/ me /g, ' you ');
    userInput = userInput.replace(/ing /g, ' ');

    //---Empty submission response generator---
    if (userInput === '') {
        var responseString = 'Do you really have no ambitions? <br>Type something in.';
    } else {
        //--------Random response array--------
        let randomResponseArr = [
            `You seem capable. <br>I'm sure you can <br>${userInput}. <br>๐`,
            `I don't know man, <br>you get kinda tense <br>when you ${userInput}. <br>๐ฌ`,
            `Are you sure you even want <br>to ${userInput}? <br>๐คจ`,
            `You've got to dream bigger. <br>Anyone can ${userInput}. <br>๐ฅฑ`,
            `I know you have it within you <br>to ${userInput}. <br>๐`,
            `I believe in you. <br>Now go ${userInput}. <br>๐`,
            `You're going to kill it today! <br>Nobody is more prepared <br>to ${userInput} than you.<br>๐`,
            `I'm sorry, <br>I can't let you <br>${userInput}. <br>โญ`,
            `You want to ${userInput}? <br>You're going to miss <br>LOADS of great content <br>on Instagram if you do that. <br>๐ฑ`,
            `Only true masters <br>can ${userInput}. <br>๐งโโ๏ธ`,
        ];
        //--------Random index generator--------
        let x = Math.floor(Math.random() * 10);
        responseString = randomResponseArr[x];
    }
    //------Assign response string to HTML------
    let palResponse = document.getElementById('pal-response');
    palResponse.innerHTML = responseString;
}
//--------Event listener (submit)--------
let userSubmit = document.getElementById('user-input');
userSubmit.addEventListener('submit', palRespond);
userSubmit.addEventListener('submit', palActivate);

//---------P.A.L.s eye activate----------
/**
 * Illuminates P.A.L. lamp on submit
 * @param {} event - user submit
 * @returns {void} - lamp illuminates for .8s
 */
function palActivate(event) {
    let palActive = document.getElementById('pal-active');  
    palActive.style.display = 'block';
    setTimeout(function(){palActive.style.display = 'none';}, 800);
}

/*----------------MODULE 2 PAL video reveal and play---------------
-------------------Reveals 'exist' video and plays----------------*/
/**
 * Displays wlex video when appropriate button is clicked
 * pauses and hides video if playing
 * @param {} event - user clicks
 * @param {button value} - reads value of button (playing/paused)
 * @returns {void} - video plays/video hides and pauses
 */
function playWlex(event) {
    var currentWlexValue = wlexButton.value;
    if (currentWlexValue === 'not-playing' && 
        luckButton.value !== 'playing' && 
        intuitionButton.value !== 'playing') {
        wlexButton.value = 'playing';
        let wlexVid = document.getElementById('wl-ex');
        wlexVid.style.display = 'inline';
        wlexVid.play();
        wlexButton.style.boxShadow = '-3px -3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = '<p>Waking Life, LINKLATER (2001)</p>';
        drPalLed.style.background = 'radial-gradient(#fff, #e94f37)';
    } else {
        wlexButton.value = 'not-playing';
        let wlexVid = document.getElementById('wl-ex');
        wlexVid.style.display = 'none';
        wlexVid.pause();
        wlexButton.style.boxShadow = '3px 3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = 'Maybe this will help...';
        drPalLed.style.background = 
        'radial-gradient(rgb(177, 74, 74), #e94f37)';
    }
}

//--------------Event listener for 'exist' button click------------ 
var wlexButton = document.getElementById('exist');
wlexButton.addEventListener('click', playWlex);

//-------------------Reveals 'luck' video and plays---------------- 
/**
 * Displays luck video when appropriate button is clicked
 * pauses and hides video if playing
 * @param {} event - user clicks
 * @param {button value} - reads value of button (playing/paused)
 * @returns {void} - video plays/video hides and pauses
 */
function playLuck(event) {
    var currentLuckValue = luckButton.value;
    if (currentLuckValue === 'not-playing' && 
        wlexButton.value !== 'playing' && 
        intuitionButton.value !== 'playing') {
        luckButton.value = 'playing';
        let luckVid = document.getElementById('luck');
        luckVid.style.display = 'inline';
        luckVid.play();
        luckVid.volume = 0.3;
        luckButton.style.boxShadow = '-3px -3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = '<p>Luck, School of Life (2018)</p>';
        drPalLed.style.background = 'radial-gradient(#fff, #e94f37)';
    } else {
        luckButton.value = 'not-playing';
        let luckVid = document.getElementById('luck');
        luckVid.style.display = 'none';
        luckVid.pause();
        luckButton.style.boxShadow = '3px 3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = 'Maybe this will help...';
        drPalLed.style.background = 
        'radial-gradient(rgb(177, 74, 74), #e94f37)';
    }
}

//--------------Event listener for 'luck' button click------------ 
var luckButton = document.getElementById('luck-sol');
luckButton.addEventListener('click', playLuck);

//---------------Reveals 'intuition' video and plays-------------- 
/**
 * Displays intuition video when appropriate button is clicked
 * pauses and hides video if playing
 * @param {} event - user clicks
 * @param {button value} - reads value of button (playing/paused)
 * @returns {void} - video plays/video hides and pauses
 */
function playIntuition(event) {
    var currentIntValue = intuitionButton.value;
    if (currentIntValue === 'not-playing' && 
        wlexButton.value !== 'playing' && 
        luckButton.value !== 'playing') {
        intuitionButton.value = 'playing';
        let intuitionVid = document.getElementById('intuition');
        intuitionVid.style.display = 'inline';
        intuitionVid.play();
        intuitionVid.volume = 0.6;
        intuitionButton.style.boxShadow = '-3px -3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = '<p>Intuition, Alan Watts (circa 1973)</p>';
        drPalLed.style.background = 'radial-gradient(#fff, #e94f37)';
    } else {
        intuitionButton.value = 'not-playing';
        let intuitionVid = document.getElementById('intuition');
        intuitionVid.style.display = 'none';
        intuitionVid.pause();
        intuitionButton.style.boxShadow = '3px 3px 3px #000';
        let palC2Text = document.getElementById('vid-credit');
        palC2Text.innerHTML = 'Maybe this will help...';
        drPalLed.style.background = 
        'radial-gradient(rgb(177, 74, 74), #e94f37)';
    }
}

//----------Event listener for 'intuition' button click---------
var intuitionButton = document.getElementById('int-aw');
intuitionButton.addEventListener('click', playIntuition);

// --------Dr P.A.L. led (to illuminate when videos play)-------
var drPalLed = document.getElementById('led');