$(document).ready(function(){
    $('#genTableButton').click(function() {
//        $("#content").load("lab07.html");
    $.ajax({
    url: 'boxoffice.csv',
    dataType: 'text',
    }).done(successFunction);
    
    function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);
        
    var col = $("table tr");  

//    Selecting the columns using the tr 
    $("th:not(:first-child)").click(function() { 
        col.children().removeClass("selected"); 
        var index = $(this).prevAll().length;  
        col.find(":nth-child(" + (index + 1) + ")").addClass("selected");
    });

    $("th").click(function() {
        var highlight = $(this).addClass("selected");
        $("tr").removeClass("selected");
        if(!highlight) {
            $(this).addClass("selected");
        }
    });
    
        col.children().removeClass("selected"); 
        var index = $(this).prevAll().length;  
        col.find(":nth-child(" + (index + 1) + ")").addClass("selected");
        
        $("td").click(function () {
        var OriginalContent = $(this).text();
        $(this).addClass("selected");
        $(this).children().first().blur(function() {
            $(this).parent().text(OriginalContent);
        });
    });
    
}
    });
    });