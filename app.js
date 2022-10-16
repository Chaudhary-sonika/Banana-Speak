var btn = document.querySelector("#interpret-btn");
var inputPlace = document.querySelector("#input-place");
var output = document.querySelector("#text-output");
var errorDiv = document.querySelector("#error-div");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getApiURL(input) {
    return serverURL +"?"+"text="+ input
}
function handlingError(error) {
    console.log("error occured: ", error);
    alert("There are an error with the server! try again after some time")
}
function btnClick() {
    if(inputPlace.value !=" ") {
        errorDiv.style.display = "none"; 
        var inputText = inputPlace.value;
        fetch (getApiURL(inputText))
       .then(response => response.json())
       .then(json => {
         var interpretedText = json.contents.translated;
         output.innerText = interpretedText;
     })
     .catch(handlingError)
    } else{
        errorDiv.innerText = "Please enter sentence or a word";
    }
   
};
btn.addEventListener("click", btnClick)