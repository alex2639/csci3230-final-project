$(document).ready(function(){
   var lat;
    var lon;
    $('#go').click(function(){
        var city = $('#city').val();
        $.fn.showList(city);
    });

    $.fn.showList = function(city){
        var cdate = new Date();
        var dtime = cdate.getFullYear()+"-"+ (cdate.getMonth()+1)+"-"+ cdate.getDate();
    
        urlNP = "http://data.tmsapi.com/v1.1/movies/showings?startDate="+dtime+"&zip="+city+"&api_key=fzs587dc8mhq4u4xetqbxjr5";
        
        $.getJSON(urlNP, function(data){
            
            $('#movies').html('<h3>List of Now Playing Movies:</h3>');
            
            for(var i=0; i < data.length; i++){
                var content = '<div id = "cube">'
                content += '<h4><b>' + data[i].title + '</b></h4>';
                var temp = data[i].runTime;
                if(temp != null){
                    var splt = temp.split("T");
                    var splt1 = splt[1].split("H");
                    var splt2 = splt1[1].split("M")
                    content += '<h5>Run Time: ' + splt1[0] + ':'+ splt2[0]+'</h5>';
                }
                content += '<p>Released: ' + data[i].releaseDate + '</p>';
                content += '<p>Summary: ' +data[i].longDescription + '</p>';
                content += '</div>';
                
                $('#movies').append(content);
                $('#movies').append('<hr>')
                
                }                
            });
            
        };
    });