# P.A.L. 🤖 Your Personal Accountability Labourer
P.A.L. is for the disenfranchised and disempowered. P.A.L. will make small life choices for you in the hope that the resources P.A.L. provides will help you to empower yourself. P.A.L.'s first module makes the decision for you and the second will provide you with a resource related to personal accountability/empowerment.

I want P.A.L. to displace the user's nihilism so that P.A.L. can help them to focus on empowering themselves. P.A.L. obviously isn't equipped to give real advice to the user (noted in a disclaimer in the footer); it's real value lies in the lighthearted reconstitution of the user's motivation. It draws attention to the user's agency and attempts to bolster their confidence with reassurance and humour.

---

## Table of Contents
- ### [Demo](#demo)
- ### [Wireframe](wireframe)
- ### [Responsive Demo](#responsive-demo)
- ### [UX](#ux)
    - #### [User Stories](#user-stories)
    - #### [Strategy](#strategy)
    - #### [Scope](#scope)
        - ##### [Future Features](#future-features)
    - #### [Structure](#structure)
    - #### [Skeleton](#skeleton)
    - #### [Surface](#surface)
- ### [Technologies Included](#technologies-included)
- ### [Testing](#testing)
- ### [Deployment](#deployment)
- ### [Known Bugs](#known-bugs)
- ### [Out of Scope/Future Features](#out-of-scope/future-features)
- ### [Credits](#credits)
- ### [Media](#media)
- ### [Acknowledgements](#acknowledgements)
---

## Demo

Deployed here - https://charliehawley.github.io/MP2-PA/
Repository here - https://github.com/charliehawley/MP2-PA

### Wireframe
![wireframe image](assets/images/wireframe.png)
*N.B. pdf available in: /assets/images*

### Responsive Demo

## UX
---

## User Stories

The USER here is typified by the new, post-pandemic cultural norm characterised by confinement, stagnation and a lack of structure:

* As a user, I would like to utilize P.A.L. to remove the burden of personal responsibility and make small decisions for me.

* As a user, I would like to find inspiration for reclaiming the agency to make decisions for myself. I want to find resources relavant to my specific gripes concerning personal responsibility.

* As a user, I would like to use P.A.L. as an opportunity to decompress and enjoy some subversive humour that addresses motivation (or a lack thereof).

* As a user, I want to find resources that relieve my anxiety concerning decision-making and vicious cycles of self-doubt.

## Strategy
P.A.L. is intended to empower by temporarily suspending a user's personal accountability and providing resources to those who need to redirect their potential.

## Scope
P.A.L. will allow the users to indulge in a chance-based evaluation of their potential to complete a task submitted by the user. P.A.L. is therefore an arbitrary guidance counsellor.<br>

The MVP for this project necessitates:
* A user input (text) form
* Video content for the reformation of the disempowered user

### Future features
* A more robust conjugation method to P.A.L.s output in the first module. Perhaps using Martin Porter's *Porter Stemmer.*
* Username storage using local storage which reminds the user how many times they've visited the site and how many times they've surrendered their agency to the app.
* More intuitive interface for the provision of video content. The button system currently requires the user to click the button related to the video they're watching in order to pause and select another video.
<br>

## Structure
P.A.L. has two modules stacked according to priority. These two modules are the only elements the user can interact with on the site. <br><br>The first is akin to a Magic 8 Ball concept (using user input and randomised responses) and the second provides third-party resources to inspire the user to re-approach decision-making for themselves. <br><br>The input/response is prioritised to establish the subversive tone of P.A.L.s approach to decision-making. The motivational resources are then introduced to directly address the user's malaise.
<br>

## Skeleton
P.A.L.s two modules appears centrally on the homepage. 
On large displays, the user interfaces appear to the left, whilst the outputs are central, with function indicators on the right.
On smaller displays the modules prioritise user input above the outputs with the indicators beneath.
<br><br>
An about section explains the philosophy of P.A.L. and there is also a disclaimer recommending against using P.A.L. for serious decisions. These appear beneath the main body to avoid interfering with the tone and narrative that has been arranged to lead the user from one module to the next.

## Surface
P.A.L. bears striking resemblance to the malicious entity from Stanley Kubrick's masterpiece *2001: A Space Odyssey* but has been rebranded to suggest a more congenial character. <br><br>
The lighter cousin of H.A.L., P.A.L. is adorned with bright, brushed steel panelling instead of H.A.L.s ominous black glass appearance. There are two indicator lights, one for each module that demonstrate the state of the active functions. <br><br>
Behind the modules steel plaques is a dark plastic dashboard texture that's just tacky enough to suggest a B-movie replica of Kubrick's more meticulous set design. <br><br>
The color scheme is also derivative of *2001: A Space Odyssey*

---

## Technologies Included
HTML<br>
CSS<br>
JavaScript<br>
Adobe Fonts<br>
Gitpod<br>
GitHub<br>
Coolors<br>
Web AIM<br>

## Testing
JS hint - returned 'responseString' used out of scope however when variable was redeclared 'responseString' returned 'undefined' so both instances (line 30, line 34) were left unchanged.

## Deployment

## Known Bugs
* Module 1 'What are you thinking of doing?'
    * Although the text input field is prepopulated with 'I'm trying to...' (in order to force the syntax of the user input) if the user inserts a present participle verb (havING, chargING) where the verb would usually end in 'e', P.A.L. won't append the 'e'. The output for these two examples is therefore 'hav' and 'charg' respectively.
    * The longer the string, the more opportunity there is for the conjugation to break the function: 
    
    ![image of confusing output](assets/images/long-strings.jpg)

    * ~~IOS device clicks don't trigger the P.A.L. lamp on/off~~ SOLVED: changed lamp trigger to 'submit' event instead of 'mousedown'/'mouseup' events.

* Module 2 'Dr P.A.L.'
    * Playing a video shows the credit for that video in the vid-credit panel however clicking on a video button whilst another video is playing replaced the credit with the placeholder text and continues to play the original video.

## Out of scope/future features
* full screen video from Module 2
* log and filter responses from Module 1 so that you don't recieve the same result twice

## Credits
* Adobe fonts - OCR-A Std, Lo-Res 21 Serif

### Media

## Acknowledgements