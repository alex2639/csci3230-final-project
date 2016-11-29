//Take input to later be outputted as part of the messages 
function myFunction() {
    var x = document.getElementById("comment").value;
    var y = x.split(" ");
    document.getElementById("demo").innerHTML = y[1];
}