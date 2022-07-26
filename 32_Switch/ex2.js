
// Rewrite the languageInfo function using the switch operator.

function languageInfo(language) {
  if (language === "JavaScript"){
    console.log("Begins on December 4, 1995");
  } else if (language === "Java") {
    console.log("Begins on May 23, 1995");
  } else if (language === "PHP") {
    console.log("Begins on June 8, 1995");
  }
}




// ans
function languageInfo(language){
     // write your code here
     switch(language) {
          case "JavaScript":
            console.log("Begins on December 4, 1995");
            break;
          case "Java":
            console.log("Begins on May 23, 1995");
            break;
          case "PHP":
            console.log("Begins on June 8, 1995");
            break;
     }
}
