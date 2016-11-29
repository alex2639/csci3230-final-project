$(document).ready(function(){
   var chat = document.getElementById('chat');
    
    chat.onkeypress = function(ele){
        if(ele.keyCode == 13){
            var usr =  document.getElementById('user').innerHTML;
            var user = usr.slice(3, -4);
            var temp = user + ': ' + chat.value + '\n';
            var out = document.getElementById('messages');
            out.innerHTML += temp;;
            chat.value = '';
        }
    }  
});
