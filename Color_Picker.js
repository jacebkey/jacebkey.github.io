//code from: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
var colorWell;
var color = "#800000";

window.addEventListener("load", startup, false);

/**
 * startup - Prepares the color selector depending on the browser used
 *
 */
function startup() {

    // Leave this line as is, checks for IE
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if(isIE || isSafari){
      var colorArea = document.getElementById("colorSelection");
      colorArea.removeChild(document.getElementById("colorWell"));
      var newColorWell = document.createElement("select");
      var red = document.createElement("option");
      red.text="Red";
      red.value="#FF0000";
      newColorWell.appendChild(red);
      var green = document.createElement("option");
      green.text="Green";
      green.value="#00FF00";
      newColorWell.appendChild(green);
      var blue = document.createElement("option");
      blue.text="Blue";
      blue.value="#0000FF";
      newColorWell.appendChild(blue);
      newColorWell.id = "colorWell";
      colorSelection.appendChild(newColorWell);
    }
    else{
      colorWell = document.querySelector("#colorWell");
      colorWell.value = color;
      colorWell.addEventListener("input", updateFirst, false);
      colorWell.select();
    }
}

/**
 * updateFirst - This function is called by the colorWell object whenever the user
 * updates the color.
 *
 * @param  {input} event The input event triggered by updating the color
 */
function updateFirst(event) {
    color = document.querySelector("#Color");
    if (color) {
        color = event.target.value;
    }

}
