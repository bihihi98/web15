const maxLength=200;

document.getElementById('kitu').addEventListener('input', 
function(){
    var remainChar= maxLength - document.getElementById('kitu').value.length;
    document.getElementById('remain').innerText=remainChar;
});


