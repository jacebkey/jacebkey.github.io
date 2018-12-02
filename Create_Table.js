
/**
 * CreateTable - Creates or updates the existing table to a new dimension.
 *
 * @param  {number} columns the number of columns
 * @param  {number} rows    the number of rows
 */
function CreateTable(columns,rows) {


  var oldTable =  document.getElementById("myTable");
  if(oldTable){
    oldTable.parentNode.removeChild(oldTable);
  };
  var tb = document.createElement("TABLE");
  tb.setAttribute("id", "myTable" );
  document.getElementById("table_space").appendChild(tb);
  // document.getElementById("table_space").appendChild(tb);




  var i;
  var j;

  for (i = 0; i < rows; i++) {
    var tr = document.createElement("TR");
    tr.setAttribute("id", String(i));

    document.getElementById("myTable").appendChild(tr);
    for (j = 0; j < columns; j++) {
      var td = document.createElement("TD");
      td.setAttribute("id", String(i) + "," + String(j) ); //We can maybe use cellindex instead.

      document.getElementById(String(i)).appendChild(td);
    }

  }

}
