$(function() {
    // Create table of fixed 8x16 size
    makeTable();

    // $('#old-input').html('');
    $('#edit-area').val('');  // Has spaces in it to start for some reason
});

function makeTable() {
    CreateTable(16, 16);
    spacing(16);
    initializePosition(8);
}

function writeLetter(letter, color='#ff0000') {
    makeTable();
    eval(`letter${letter.toUpperCase()}('${color}');`);
}

$('#run-code').click(() => {
    CreateTable(0,0);
    makeTable();
    eval($('#edit-area').val());
});

var jsonBlob;
function createPresetButtons() {
    $.getJSON("https://api.myjson.com/bins/kqptm", function(json) {
        //console.log(json[0]); // this will show the info it in firebug console
        jsonBlob = json;
        var i = 0;
        for(var item of json)
        {
            var buttonHTML = "<button style=\"width: 50%; padding: 1%\" onClick=\"loadPreset(" + i + ")\">" + item.title + "</button><br/>";
            document.getElementById("premade-code").innerHTML += buttonHTML;
            i++;
        }
    });
}

function loadPreset(index) {
    document.getElementById('edit-area').value = jsonBlob[index].code;
}

var savedCode = [];
function saveCode()
{
    console.log("Saved code");
    savedCode[savedCode.length] = document.getElementById('edit-area').value;
    var buttonHTML = "<button style=\"width: 50%; padding: 1%\" onClick=\"loadSavedCode(" + (savedCode.length-1) + ")\">Save #" + savedCode.length + "</button><br/>";
    document.getElementById("saved-code").innerHTML += buttonHTML;
}

function loadSavedCode(index)
{
    document.getElementById('edit-area').value = savedCode[index];
}