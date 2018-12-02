
/**
 * resetTable - Clears the current table to a blank table.
 *              Won't work unless a table is currently drawn.
 *
 */
function resetTable(){


    var oldTable =  document.getElementById("myTable");
    document.getElementById("defaultDropDown").selectedIndex = 0;
    if(oldTable){
        var oldColumns = document.getElementById('myTable').getElementsByTagName('tr').length;
        var oldRows = document.getElementById('myTable').getElementsByTagName('td').length/oldColumns;
        CreateTable(oldColumns,oldRows);
    } else {
        alert("You need to create a table before you can reset it!");
    }

}
