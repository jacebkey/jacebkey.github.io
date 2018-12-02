
window.onerror = function(msg, at, line, col, error) {
   var extra = !col ? '' : '\ncolumn: ' + col;
   extra += !error ? '' : '\nerror: ' + error;
   alert("Error: " + msg + "\nat: " + at + "\nline: " + line + extra);
   var suppressErrorAlert = true;
   return suppressErrorAlert;
};

