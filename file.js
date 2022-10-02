var input=document.querySelector("#ta1");
var outpur=document.querySelector("#ta2");
var translate=document.querySelector("#btn");
const opDiv=document.querySelector("#opd");
var url="https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text)
{
    return url +"?text="+text;
}
function errorhandler(error)
{
    console.log(error);
    alert("somewthing went wrong try again after some time");
}

function minion()
{
    fetch(getTranslationUrl(input.value))
    .then(response => response.json())
    // .then(json => console.log(json.contents.translated))
    .then(json=> {
        var translated_Text=json.contents.translated;
        ta2.innerText=translated_Text;
    })
    .catch(errorhandler);
}
translate.addEventListener('click',minion);











// ex04
// console.log(input);
// .value is used to read text area input by the user u can see the output in the console


// function minions()
// {
//     console.log("i am a minion");

//     console.log( "input  ", input.value );
// }



// ex05
// wire a div
// ta2.innerText="Hello everyone welcome back";  this can be used for pushing values on screen
// function minions()
// {
//     ta2.innerText="Hey there";
//     console.log(input.value ," translated into",opDiv.innerText="fuck you bitch");
// }

//doubt-1 why it works even without clicking and why the click is not working in other browser

// calling a mock server and getting a response
//aslo writing test cases in case of failure

// function checkerror(error)
// {
//     console.log(error);
//     // console.log("server failed to load");
//     alert("something went wrong with the server");
// }
// function lec4testapi()
// {
//     ta2.innerText=   `${input.value} translated into = Minion language`;
//     var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=i am iron man";
//     fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json.contents.translated))
//     .catch(checkerror);
// }
