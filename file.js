var input=document.querySelector("#ta1");
var outpur=document.querySelector("#ta2");
var translate=document.querySelector("#btn");
const opDiv=document.querySelector("#opd");

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



function minion()
{
    ta2.innerText=   `${input.value} translated into = Minion language`;
}

translate.addEventListener("click", minion);