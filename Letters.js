var space=1;
var count=0;
var hRows;
var hTop;
var hBottom;


/**
 * letterA - Draws the letter A
 *
 * @param  {string} color A string representation of a color
 */
function letterA(color){


  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hBottom-3)+ "," + String (count+1+horizontal+(3*num))).setAttribute("style", "background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hBottom)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid "  + color);

    }

  }
  for (var vertical=0; vertical < 5; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+2+vertical)+ "," + String (count+1+(num*5))).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
    }
  }
  for (var horizontal=0; horizontal < 1; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop)+ "," + String (count+3+horizontal+(num))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop+1)+ "," + String (count+2+horizontal+(3*num))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }
  }
  count = count+ 8 + space ;

}
/**
 * letterB - Draws the letter B
 *
 * @param  {string} color A string representation of a color
 */
function letterB(color){

  for (var horizontal=0; horizontal < 5; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+3)+ "," + String (1+count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  }
  for (var vertical=0; vertical < 6; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*4))).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
    }
  }
  document.getElementById(String(hTop+3)+ "," + String (count+5)).removeAttribute("style");
  count = count+ 6 + space ;

}
/**
 * letterC - Draws the letter C
 *
 * @param  {string} color A string representation of a color
 */
function letterC(color){

  for (var horizontal=0; horizontal < 5; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  }
  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop+1+vertical)+ "," + String (count)).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
  }
  document.getElementById(String(hTop)+ "," + String (count)).removeAttribute("style");
  document.getElementById(String(hBottom)+ "," + String (count)).removeAttribute("style");
  document.getElementById(String(hTop+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  count = count+ 6 + space ;


}
/**
 * letterD - Draws the letter D
 *
 * @param  {string} color A string representation of a color
 */
function letterD(color){

  for (var horizontal=0; horizontal < 5; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  }
  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop+1+vertical)+ "," + String (count+1)).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
  }
  for (var vertical=0; vertical < 4; vertical++){
    document.getElementById(String(hTop+2+vertical)+ "," + String (count+6)).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
  }
  document.getElementById(String(hTop+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  count = count+ 7 + space ;

}
/**
 * letterE - Draws the letter E
 *
 * @param  {string} color A string representation of a color
 */
function letterE(color){

  for (var horizontal=0; horizontal < 6; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+3)+ "," + String (1+count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  }
  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop+1+vertical)+ "," + String (count+1)).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
  }
  document.getElementById(String(hTop+3)+ "," + String (count+5)).removeAttribute("style");
  document.getElementById(String(hTop+3)+ "," + String (count+6)).removeAttribute("style");
  document.getElementById(String(hTop+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  count = count+ 6 + space ;

}
/**
 * letterF - Draws the letter F
 *
 * @param  {string} color A string representation of a color
 */
function letterF(color){


  for (var horizontal=0; horizontal < 6; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+3)+ "," + String (1+count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  }
  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop+1+vertical)+ "," + String (count+1)).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
  }
  document.getElementById(String(hTop+3)+ "," + String (count+5)).removeAttribute("style");
  document.getElementById(String(hTop+3)+ "," + String (count+6)).removeAttribute("style");
  document.getElementById(String(hBottom)+ "," + String (count+5)).removeAttribute("style");
  document.getElementById(String(hBottom)+ "," + String (count+4)).removeAttribute("style");
  document.getElementById(String(hTop+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  count = count+ 6 + space ;

}
/**
 * letterG - Draws the letter G
 *
 * @param  {string} color A string representation of a color
 */
function letterG(color){


  for (var horizontal=0; horizontal < 5; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  }
  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop+1+vertical)+ "," + String (count)).setAttribute("style", " background: " +color + "; border: 1px solid " + color);
  }
  document.getElementById(String(hTop)+ "," + String (count)).removeAttribute("style");
  document.getElementById(String(hBottom)+ "," + String (count)).removeAttribute("style");
  document.getElementById(String(hTop+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-2)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-3)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  document.getElementById(String(hBottom-3)+ "," + String (count+4)).setAttribute("style", " background:" + color + "; border: 1px solid " + color );
  count = count+ 6 + space ;

}
/**
 * letterH - Draws the letter H
 *
 * @param  {string} color A string representation of a color
 */
function letterH(color){


  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hBottom-3)+ "," + String (count+1+horizontal+(3*num))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hBottom)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 7; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*5))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }

  count = count+ 8 + space ;

}
/**
 * letterI - Draws the letter I
 *
 * @param  {string} color A string representation of a color
 */
function letterI(color){


  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

  }
  for (var vertical=0; vertical < 7; vertical++){
    document.getElementById(String(hTop+vertical)+ "," + String (count+1)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  count = count+ 3 + space;
}
/**
 * letterJ - Draws the letter J
 *
 * @param  {string} color A string representation of a color
 */
function letterJ(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (2+count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

  }
  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop+vertical)+ "," + String (3+count)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  }
  for (var horizontal=0; horizontal < 1; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hBottom)+ "," + String (count+1+horizontal+(1*num))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hBottom-1)+ "," + String (count+horizontal+(3*num))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }
  }
  count = count+ 5 + space;
}
/**
 * letterK - Draws the letter K
 *
 * @param  {string} color A string representation of a color
 */
function letterK(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

  }
  for (var vertical=0; vertical < 7; vertical++){
    document.getElementById(String(hTop+vertical)+ "," + String (count+1)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  for (var vertical=0; vertical < 4; vertical++){
    document.getElementById(String(hTop+3+vertical)+ "," + String (count+2+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+3-vertical)+ "," + String (count+2+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  document.getElementById(String(hTop)+ "," + String (count+6)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+6)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+7)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  count = count+ 8 + space;
}
/**
 * letterL - Draws the letter L
 *
 * @param  {string} color A string representation of a color
 */
function letterL(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal+3)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

  }
  for (var vertical=0; vertical < 7; vertical++){
    document.getElementById(String(hTop+vertical)+ "," + String (count+1)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  count = count+ 6 + space;

}
/**
 * letterM - Draws the letter M
 *
 * @param  {string} color A string representation of a color
 */
function letterM(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){

      document.getElementById(String(hBottom)+ "," + String (count+horizontal+(num*6))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*6))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 7; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*6))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }

  document.getElementById(String(hTop+2)+ "," + String (count+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+2)+ "," + String (count+6)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+3)+ "," + String (count+3)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+3)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+4)+ "," + String (count+4)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+5)+ "," + String (count+4)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  count = count+ 9 + space;
}
/**
 * letterN - Draws the letter N
 *
 * @param  {string} color A string representation of a color
 */
function letterN(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){

      document.getElementById(String(hBottom)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 7; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*5))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }

  document.getElementById(String(hTop+2)+ "," + String (count+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+3)+ "," + String (count+3)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+4)+ "," + String (count+4)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+5)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);


  count = count+ 8 + space;
}
/**
 * letterO - Draws the letter O
 *
 * @param  {string} color A string representation of a color
 */
function letterO(color){

  for (var horizontal=0; horizontal < 4; horizontal++){
    for (var num= 0; num < 2; num++){

      document.getElementById(String(hBottom)+ "," + String (count+horizontal+1)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+1)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 6; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+(num*5))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }

  count = count+ 6 + space ;

}
/**
 * letterP - Draws the letter P
 *
 * @param  {string} color A string representation of a color
 */
function letterP(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop)+ "," + String (count+horizontal+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+4)+ "," + String (count+horizontal+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop)+ "," + String (count+horizontal+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+horizontal+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  }
  for (var vertical=0; vertical < 7; vertical++){
    document.getElementById(String(hTop+vertical)+ "," + String (count+1)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  count = count+ 6 + space;

}
/**
 * letterQ - Draws the letter Q
 *
 * @param  {string} color A string representation of a color
 */
function letterQ(color){


  for (var horizontal=0; horizontal < 4; horizontal++){
    for (var num= 0; num < 2; num++){

      document.getElementById(String(hBottom)+ "," + String (count+horizontal+1)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+1)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 6; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+(num*5))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }
  document.getElementById(String(hBottom)+ "," + String (count+4)).removeAttribute("style");
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).removeAttribute("style");
  document.getElementById(String(hBottom-1)+ "," + String (count+4)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+5)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+6)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  count = count+ 7 + space ;

}
/**
 * letterR - Draws the letter R
 *
 * @param  {string} color A string representation of a color
 */
function letterR(color){


  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop)+ "," + String (count+horizontal+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+3)+ "," + String (count+horizontal+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop)+ "," + String (count+horizontal+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop+horizontal+1)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  }
  for (var vertical=0; vertical < 7; vertical++){
    document.getElementById(String(hTop+vertical)+ "," + String (count+1)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  for (var vertical=0; vertical < 5; vertical++){
    document.getElementById(String(hTop+3+vertical)+ "," + String (count+2+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);


  }
  document.getElementById(String(hTop+3)+ "," + String (count+5)).removeAttribute("style")
  document.getElementById(String(hBottom)+ "," + String (count+5)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  count = count+ 7 + space;

}
/**
 * letterS - Draws the letter S
 *
 * @param  {string} color A string representation of a color
 */
function letterS(color){


  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      document.getElementById(String(hTop)+ "," + String (count+1+i+(2*j))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hBottom)+ "," + String (count+1+i+(2*j))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop+1+i)+ "," + String (count+(5*j))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hBottom-1-i)+ "," + String (count+(5*j))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop+3+j)+ "," + String (count+1+i+(2*j))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    }
  }



  count = count + 6 + space;
}
/**
 * letterT - Draws the letter T
 *
 * @param  {string} color A string representation of a color
 */
function letterT(color){

  for (var vertical=0; vertical < 7; vertical++){
    document.getElementById(String(hTop+vertical+1)+ "," + String (count+3)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop)+ "," + String (count+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  document.getElementById(String(hTop+1)+ "," + String (count)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+1)+ "," + String (count+6)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+2)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+4)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  count = count+ 7 + space;
}
/**
 * letterU - Draws the letter U
 *
 * @param  {string} color A string representation of a color
 */
function letterU(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hBottom)+ "," + String (count+horizontal+2+(num*1))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 6; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*5))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }

  count = count+ 8 + space ;

}
/**
 * letterV - Draws the letter V
 *
 * @param  {string} color A string representation of a color
 */
function letterV(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*6))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 2; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*6))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop+3+vertical)+ "," + String (count+2+(num*4))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop+5+vertical)+ "," + String (count+3+(num*2))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }
  document.getElementById(String(hBottom)+ "," + String (count+4)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  count = count+ 9 + space ;

}
/**
 * letterW - Draws the letter W
 *
 * @param  {string} color A string representation of a color
 */
function letterW(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*8))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var vertical=0; vertical < 3; vertical++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hTop+1+vertical)+ "," + String (count+1+(num*8))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop+4+vertical)+ "," + String (count+2+(num*6))).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    }
  }
  for (var i=0; i<2;i++){
    document.getElementById(String(hBottom-1-i)+ "," + String (count+4)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom-1-i)+ "," + String (count+6)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom-3-i)+ "," + String (count+5)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  }
  document.getElementById(String(hBottom)+ "," + String (count+3)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom)+ "," + String (count+7)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  count = count+ 11 + space ;

}
/**
 * letterX - Draws the letter X
 *
 * @param  {string} color A string representation of a color
 */
function letterX(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    for (var num= 0; num < 2; num++){
      document.getElementById(String(hBottom)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
      document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*5))).setAttribute("style", " background:" + color + "; border: 1px solid " + color);

    }

  }
  for (var diagonal=0; diagonal < 6; diagonal++){
    document.getElementById(String(hTop+1+diagonal)+ "," + String (count+1+diagonal)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom-1-diagonal)+ "," + String (count+1+diagonal)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  }

  count = count+ 8 + space ;

}
/**
 * letterY - Draws the letter Y
 *
 * @param  {string} color A string representation of a color
 */
function letterY(color){

  for (var horizontal=0; horizontal < 3; horizontal++){
    document.getElementById(String(hTop)+ "," + String (count+6+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (3+count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom-horizontal-1)+ "," + String (count+4)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  }

  document.getElementById(String(hTop+1)+ "," + String (count+1)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+1)+ "," + String (count+7)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+2)+ "," + String (count+2)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+2)+ "," + String (count+6)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+3)+ "," + String (count+3)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);
  document.getElementById(String(hTop+3)+ "," + String (count+5)).setAttribute("style", " background:" + color + "; border: 1px solid " + color);



  count = count+ 9 + space ;

}
/**
 * letterZ - Draws the letter Z
 *
 * @param  {string} color A string representation of a color
 */
function letterZ(color){

  for (var vertical=0; vertical < 6; vertical++){
    document.getElementById(String(hTop)+ "," + String (count+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom)+ "," + String (count+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
    document.getElementById(String(hBottom-1-vertical)+ "," + String (count+vertical)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  }
  document.getElementById(String(hTop+1)+ "," + String (count)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);
  document.getElementById(String(hBottom-1)+ "," + String (count+5)).setAttribute("style", " background: " + color + "; border: 1px solid " + color);

  count = count+ 6 + space;
}
/**
 * letterSpace - Leaves space for the ' ' character.
 *
 */
function letterSpace(){
    count = count+ space + space + space;
}
