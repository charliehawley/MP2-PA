# PAL 🤖
PAL is for the disenfranchised and disempowered. PAL will make small life choices for you in the hope that the resources PAL provides will help you to empower yourself. PAL's first module makes the decision for you and the second will provide you with a resource related to personal accountability/empowerment.

I want PAL to displace the user's nihilism so that PAL can help them to focus on empowering themselves.

## Strategy
PAL is intended to empower by temporarily displacing personal accountability and providing resources to those who need to redirect their potential.

## Scope
PAL will allow the users to indulge in a chance-based evaluation of their potential failure or success at a task submitted by the user. PAL is therefore an arbitrary guidance counsellor.

## Structure
PAL is the first and only element you can interact with on the site. He will then provide third party resources to enable the user to re-approach decision-making for themselves.

## Skeleton
PAL will appear centrally on the homepage but there will be a resources page and about section on the site to explain the philosophy of PAL and also a disclaimer recommending against using PAL for serious personal use.

## Bugs
* Module 1 'What are you thinking of doing?'
    * Although the text input field is prepopulated with 'I'm trying to...' (in order to force the syntax of the user input) if the user inserts a present participle verb (havING, chargING) where the verb would usually end in 'e', PAL won't append the 'e'. The output for these two examples is therefore 'hav' and 'charg' respectively.
    * The longer the string, the more opportunity there is for the syntax to break the function: 
    
    ![image of confusing output](/assets/images/long-strings.jpg)

## Out of scope/future features
* full screen from Module 2
* log and filter responses from Module 1 so that you don't recieve the same result twice
## Testing 
* jshint - returns fully validated JS

## Credits
* Adobe fonts

## Acknowledgements