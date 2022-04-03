var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"
 function getTranslationURL(input) 
{
    return serverURL + "?" + "text=" + input
}
function errorHandler(error){
    console. log("error occured" , error );
    alert("something wrong withserver! try again after some time")
}
function clickHandler(){
var inputText = txtinput.value;
// console.log(inputText)

fetch(getTranslationURL(inputText))
.then(response=> response.json())
.then(json => {
    var translatedText = json.contents.translated;
    outputdiv.innerText = translatedText; 
})
 .catch(errorHandler)
};

  btntranslate.addEventListener("click", clickHandler)