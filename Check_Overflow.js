
/**
 * checkOverflow - A function to help center the text. It determines where to start
 * displaying the word to make the word centered.
 *
 * @param  {string} word    the word to display
 * @param  {number} columns the number of columns for the grid
 * @return {number}         the column to start on for the word to be centered,
 *                          -1 if the word cannot fit.
 */
function checkOverflow(word, columns){
    var overflow=0;

    for (var i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "A":
                overflow+=8+space;
                break;
            case "B":
                overflow+=6+space;
                break;
            case "C":
                overflow+=6+space;
                break;
            case "D":
                overflow+=7+space;
                break;
            case "E":
                overflow+=6+space;
                break;
            case "F":
                overflow+=6+space;
                break;
            case "G":
                overflow+=6+space;
                break;
            case "H":
                overflow+=8+space;
                break;
            case "I":
                overflow+=3+space;
                break;
            case "J":
                overflow+=5+space;
                break;
            case "K":
                overflow+=8+space;
                break;
            case "L":
                overflow+=6+space;
                break;
            case "M":
                overflow+=9+space;
                break;
            case "N":
                overflow+=8+space;
                break;
            case "O":
                overflow+=6+space;
                break;
            case "P":
                overflow+=6+space;
                break;
            case "Q":
                overflow+=7+space;
                break;
            case "R":
                overflow+=7+space;
                break;
            case "S":
                overflow+=6+space;
                break;
            case "T":
                overflow+=7+space;
                break;
            case "U":
                overflow+=8+space;
                break;
            case "V":
                overflow+=9+space;
                break;
            case "W":
                overflow+=11+space;
                break;
            case "X":
                overflow+=8+space;
                break;
            case "Y":
                overflow+=9+space;
                break;
            case "Z":
                overflow+=6+space;
                break;
            case " ":
                overflow+=space + space + space;
                break;

        }

    }

    if(overflow>columns){
        return -1
    }else{
        return (Math.floor((columns-overflow)/2));
    }
}
