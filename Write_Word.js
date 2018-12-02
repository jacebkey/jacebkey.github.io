/**
 * spacing - Adjusts the spacing between letters depending on the table size
 *
 * @param  {number} columns The number of columns in the table
 */
function spacing(columns){

  if(columns>100) {
    space = 2;
  } else {
    space=1;
  }
}

/**
 * initializePosition - Sets the starting position for writing a word depending on the number of rows.
 *
 * @param  {type} rows description
 */
function initializePosition(rows){
  hRows = Math.round(rows/2);
  hTop=hRows-4;
  hBottom = hRows+3;
}


/**
 * writeWord - Creates a table based on the input from the form. It also runs error
 *              checking to make sure the table is within the allowed range and no invalid characters are used.
 *
 * @return {type}  description
 */
function writeWord(){
  if (count!=0){
    count=0;
  }
  var columns=document.getElementById("nColumns").value;
  var rows=document.getElementById("nRows").value;
  if(columns=="" || rows==""){
      alert("Please select the size of the table.")
//   }else if(rows<10 || columns<10){
//       alert("The smallest table size is 10x10")
  } else if(rows>100 || columns>100){
      alert("The maximum table size is 100x100")
  }else
   {
      var word = document.getElementById("word").value;
      word = word.toUpperCase();
      count=checkOverflow(word,columns);
      if (count!=-1){
          document.getElementById("defaultDropDown").selectedIndex = 0;
          CreateTable(columns, rows);
          spacing(columns);
          initializePosition(rows);
          // Leave this line as is, checks for IE
          var isIE = /*@cc_on!@*/false || !!document.documentMode;
          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          if(isIE || isSafari){
            var e = document.getElementById("colorWell");
            color = e.options[e.selectedIndex].value;
          }
          else{
            color = document.getElementById("colorWell").value;
          }

          for (var i = 0; i < word.length; i++) {
              switch (word[i]) {
                  case "A":
                      letterA(color);
                      break;
                  case "B":
                      letterB(color);
                      break;
                  case "C":
                      letterC(color);
                      break;
                  case "D":
                      letterD(color);
                      break;
                  case "E":
                      letterE(color);
                      break;
                  case "F":
                      letterF(color);
                      break;
                  case "G":
                      letterG(color);
                      break;
                  case "H":
                      letterH(color);
                      break;
                  case "I":
                      letterI(color);
                      break;
                  case "J":
                      letterJ(color);
                      break;
                  case "K":
                      letterK(color);
                      break;
                  case "L":
                      letterL(color);
                      break;
                  case "M":
                      letterM(color);
                      break;
                  case "N":
                      letterN(color);
                      break;
                  case "O":
                      letterO(color);
                      break;
                  case "P":
                      letterP(color);
                      break;
                  case "Q":
                      letterQ(color);
                      break;
                  case "R":
                      letterR(color);
                      break;
                  case "S":
                      letterS(color);
                      break;
                  case "T":
                      letterT(color);
                      break;
                  case "U":
                      letterU(color);
                      break;
                  case "V":
                      letterV(color);
                      break;
                  case "W":
                      letterW(color);
                      break;
                  case "X":
                      letterX(color);
                      break;
                  case "Y":
                      letterY(color);
                      break;
                  case "Z":
                      letterZ(color);
                      break;
                  case " ":
                      letterSpace();
                      break;
                  default:
                      CreateTable(50, 50);
                      initializePosition(50);
                      alert("Invalid Character");
                      count = 0;
                      letterU("red");
                      letterN("red");
                      letterK("red");
                      letterN("red");
                      letterO("red");
                      letterW("red");
                      letterN("red");


                }
               }
      }else {
        // For some reason, the alert in IE wont show the last word if there is no trailing space?
        alert("Your word is too long for the chosen number of columns. ")
      }
  }
}
