var space=1;
var count=0;
var hRows;
var hTop;
var hBottom;


/**
 * flower - Draws the predefined image of a flower with the specified color for the petals.
 *
 * @param  {string} color A string representation of a color
 */
function flower(color){
    for (var vertical=0; vertical < 8; vertical++){
        document.getElementById(String(hTop+vertical)+ "," + String (count+13)).setAttribute("style", "background:green");
    }

    for (var horizontal=12; horizontal < 15; horizontal++){
        document.getElementById(String(hTop)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
        document.getElementById(String(hTop + 1)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
        document.getElementById(String(hTop - 1)+ "," + String (count+horizontal)).setAttribute("style", "background:yellow");
        document.getElementById(String(hTop - 2)+ "," + String (count+horizontal)).setAttribute("style", "background:yellow");
        document.getElementById(String(hTop - 3)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
        document.getElementById(String(hTop - 4)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);

    }
    for (var horizontal=12; horizontal < 13; horizontal++){
        document.getElementById(String(hTop + 4)+ "," + String (count+horizontal)).setAttribute("style", "background:green");

    }
    for (var horizontal=9; horizontal < 12; horizontal++){
        document.getElementById(String(hTop - 2)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
        document.getElementById(String(hTop - 1)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
    }
    for (var horizontal=15; horizontal < 18; horizontal++){
        document.getElementById(String(hTop - 2)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
        document.getElementById(String(hTop - 1)+ "," + String (count+horizontal)).setAttribute("style", "background:" + color);
    }
}


/**
 * tamu - Draws the predefined image of the TAMU logo
 *
 */
function tamu(){


    count = count + 13 + space;

    //'A'
    for (var horizontal = 0; horizontal < 3; horizontal++) {
        for (var num = 0; num < 2; num++) {
            document.getElementById(String(hBottom - 2) + "," + String(count + 1 + horizontal + (3 * num))).setAttribute("style", "background:#800000");
            document.getElementById(String(hBottom) + "," + String(count + horizontal + (num * 6))).setAttribute("style", "background:#800000");
        }
    }

    for (var vertical = 0; vertical < 3; vertical++) {
        for (var num = 0; num < 2; num++) {
            document.getElementById(String(hTop + 5 + vertical) + "," + String(count + 1 + (num * 6))).setAttribute("style", "background:#800000");
        }
    }

    for (var horizontal = 0; horizontal < 1; horizontal++) {
        for (var num = 0; num < 2; num++) {
            document.getElementById(String(hTop + 2) + "," + String(count + 3 + horizontal + (2 * num))).setAttribute("style", "background:#800000");
            document.getElementById(String(hTop + 3) + "," + String(count + 2 + horizontal + (4 * num))).setAttribute("style", "background:#800000");
            document.getElementById(String(hTop + 4) + "," + String(count + 1 + horizontal + (6 * num))).setAttribute("style", "background:#800000");
        }
    }

    document.getElementById(String(hTop) + "," + String(count + 4)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop + 1) + "," + String(count + 4)).setAttribute("style", "background:#800000");

    for (var horizontal = 0; horizontal < 3; horizontal++) {
        document.getElementById(String(hTop) + "," + String(count + horizontal + 3)).setAttribute("style", "background:#800000");
    }

    count = count + 2 + space;

    //'T'
    for (var vertical = 0; vertical < 16; vertical++) {
        document.getElementById(String(hTop + vertical - 5) + "," + String(count + 7)).setAttribute("style", "background:#800000");
        document.getElementById(String(hTop + vertical - 5) + "," + String(count + 8)).setAttribute("style", "background:#800000");
        document.getElementById(String(hTop - 5) + "," + String(count + vertical)).setAttribute("style", "background:#800000");
        document.getElementById(String(hTop - 4) + "," + String(count + vertical)).setAttribute("style", "background:#800000");

    }


    //'T' serif stuff top
    document.getElementById(String(hTop-3)+ "," + String (count)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-3)+ "," + String (count+1)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-2)+ "," + String (count)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-2)+ "," + String (count+1)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-3)+ "," + String (count+14)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-3)+ "," + String (count+15)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-2)+ "," + String (count+14)).setAttribute("style", "background:#800000");
    document.getElementById(String(hTop-2)+ "," + String (count+15)).setAttribute("style", "background:#800000");

    //'T' serif stuff bottom
    document.getElementById(String(hBottom+2)+ "," + String (count+6)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+3)+ "," + String (count+6)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+2)+ "," + String (count+5)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+3)+ "," + String (count+5)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+2)+ "," + String (count+9)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+3)+ "," + String (count+9)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+2)+ "," + String (count+10)).setAttribute("style", "background:#800000");
    document.getElementById(String(hBottom+3)+ "," + String (count+10)).setAttribute("style", "background:#800000");

    count = count+ 9 + space;

    //'M'
    for (var horizontal=0; horizontal < 3; horizontal++){
        for (var num= 0; num < 2; num++){

            document.getElementById(String(hBottom)+ "," + String (count+horizontal+(num*6))).setAttribute("style", "background:#800000");
            document.getElementById(String(hTop)+ "," + String (count+horizontal+(num*6))).setAttribute("style", "background:#800000");
        }


    }
    for (var vertical = 0; vertical < 7; vertical++) {
        for (var num = 0; num < 2; num++) {
            document.getElementById(String(hTop + 1 + vertical) + "," + String(count + 1 + (num * 6))).setAttribute("style", "background:#800000");
        }
    }



document.getElementById(String(hTop+2)+ "," + String (count+2)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop+2)+ "," + String (count+6)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop+3)+ "," + String (count+3)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop+3)+ "," + String (count+5)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop+4)+ "," + String (count+4)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop+5)+ "," + String (count+4)).setAttribute("style", "background:#800000");



document.getElementById(String(hTop + 2) + "," + String(count + 2)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop + 2) + "," + String(count + 6)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop + 3) + "," + String(count + 3)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop + 3) + "," + String(count + 5)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop + 4) + "," + String(count + 4)).setAttribute("style", "background:#800000");
document.getElementById(String(hTop + 5) + "," + String(count + 4)).setAttribute("style", "background:#800000");
}


/**
 * other - Draws a predefined image of the UT logo to satisfy the "other" image requirement for the project.
 *
 */
function other(){

  for (var horizontal=0; horizontal < 100; horizontal++){
    for (var i=0; i < 100; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:#CC5500");
    }
  }

  //Tips of horns
  for (var horizontal=15; horizontal < 85; horizontal++){
    if (horizontal == 30) {
    	horizontal = 70;
    }
    for (var i=49; i < 51; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }

  //upper shaft of horns
  for (var horizontal=25; horizontal < 75; horizontal++){
    if (horizontal == 40) {
    	horizontal = 60;
    }
    for (var i=51; i < 54; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }

  //lower shaft of horns
  for (var horizontal=35; horizontal < 65; horizontal++){
    for (var i=53; i < 56; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }

  //upper head
  for (var horizontal=42; horizontal < 58; horizontal++){
    for (var i=51; i < 63; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }

  //upper head smoothing
  for (var horizontal=43; horizontal < 57; horizontal++){
    for (var i=50; i < 64; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }

  //mid head
  for (var horizontal=45; horizontal < 55; horizontal++){
    for (var i=63; i < 79; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }

  //lower head
  for (var horizontal=44; horizontal < 56; horizontal++){
    for (var i=73; i < 78; i++){
    	document.getElementById(String(i)+ "," + String (horizontal)).setAttribute("style", "background:white");
    }
  }
}
