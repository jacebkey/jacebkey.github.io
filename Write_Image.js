 document.getElementById("defaultDropDown").onchange = dropAction;

/**
 * dropAction - Function that runs when the selected value of the dropdown list changes.
 *              It updates the table to what the user selected.
 *
 */ 
function dropAction(){
    var columns;
    var rows;
    var dropSel=document.getElementById("defaultDropDown").value;
    if (count!=0){
        count=0;
    };
    switch (dropSel) {
        case "Flower":
            columns = 25;
            rows = 25;
            CreateTable(columns, rows);
            spacing(columns);
            initializePosition(rows);
            flower(color);
            break;
        case "Tamu":
            columns = 50;
            rows = 50;
            CreateTable(columns, rows);
            spacing(columns);
            initializePosition(rows);
            tamu();
            break;
        case "other":
            columns = 100;
            rows = 100;
            CreateTable(columns, rows);
            spacing(columns);
            initializePosition(rows);
            other(color);
            break;
    }
    
}
