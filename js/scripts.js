//BACK END
var isVowel = function (inputLetter, isaY) {

  var vowelArr = ["a","e","i","o","u","y"]
  var returnValue = false;

  for (var index = 0; index < vowelArr.length; index++) {
    if (inputLetter === vowelArr[index]) {
      returnValue = true;
      break;
    };
  };

    return returnValue;


};

var pigLatinTranslator = function (pigUserInput) {
  pigUserInput = pigUserInput.toLowerCase();
  var pigUserInputArr = pigUserInput.split(" ");
  var outputSentence = "";
  var currentWord, restOfWord, firstLetter;


}



//FRONT END
$(document).ready(function(){

  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var userInput = $("input#pigUserInput").val();
    $(".pig-output").text(userInput);

  });
});
