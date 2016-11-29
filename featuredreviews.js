$(document).ready(function(){
    var allMovies = new Array();
    //Get the info from the json file
    $.getJSON('featuredreviews.json',function(data) {
        
        allMovies = data.movie;
        
        $('#pic1').click(function() {
//            Empty the html and anything appended at the start of every click to make sure, the content is not being appended and only printed once 
            $('#show-data').empty();
            //Load the image
            $('<img src="'+ '/Fight_Club/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
//            Write the contents into the div
           $("<h2></h2>").html(allMovies[0].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[0].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[0].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[0].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[0].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[0].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[0].review).appendTo("#show-data");
        });
        $('#pic2').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/BatmanVSuperman/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[1].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[1].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[1].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[1].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[1].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[1].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[1].review).appendTo("#show-data");
        });
        $('#pic3').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/BeautifulMind/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[2].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[2].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[2].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[2].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[2].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[2].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[2].review).appendTo("#show-data");
        });
        $('#pic4').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/CaptainAmerica/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[3].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[3].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[3].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[3].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[3].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[3].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[3].review).appendTo("#show-data");
        });
        $('#pic5').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/TheTale/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[4].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[4].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[4].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[4].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[4].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[4].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[4].review).appendTo("#show-data");
        });
        $('#pic6').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/Interstellar/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[5].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[5].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[5].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[5].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[5].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[5].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[5].review).appendTo("#show-data");
        });        
        $('#pic7').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/TheMartian/scene.png' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[6].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[6].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[6].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[6].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[6].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[6].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[6].review).appendTo("#show-data");
        });
        $('#pic8').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/Guardians/scene.jpeg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[7].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[7].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[7].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[7].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[7].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[7].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[7].review).appendTo("#show-data");
        });
        $('#pic9').click(function() {
            $('#show-data').empty();
           $('<img src="'+ '/HowToTrain/scene.jpg' +'">').load(function() {
                $(this).width(700).height(200).appendTo('#show-data');
            });
           $("<h2></h2>").html(allMovies[8].name).appendTo("#show-data");
            $("<h3></h3>").html(allMovies[8].rating).appendTo("#show-data").append("/10");
            $("<p></p>").html(allMovies[8].production).appendTo("#show-data");
            $("<p></p>").html(allMovies[8].duration).appendTo("#show-data").append(" min.");
            $("<p></p>").html(allMovies[8].year).appendTo("#show-data");
            for (var j = 0; j < 2; j++) {
                $("<p></p>").html(allMovies[8].genre[j]).appendTo("#show-data");
            }
            $("<p></p>").html(allMovies[8].review).appendTo("#show-data");
        });
        
        //For the popup 
        function deselect(e) {
            $('.pop').slideFadeToggle(function() {
                e.removeClass('selected');
            });    
        }

        $(function() {
            $('.image').on('click', function() {
                if ($(this).hasClass('selected')) {
                    deselect($(this));               
                } 
                else {
                    $(this).addClass('selected');
                    $('.pop').slideFadeToggle();
                }
            return false;
            });

            $('.close').on('click', function() {
                deselect($('.image'));
                return false;
            });
        });
        
        $.fn.slideFadeToggle = function(easing, callback) {
            return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
        };
        //If the json file was not read properly 
    }).error(function(){
        alert("Error message");
    });
});

    
    
