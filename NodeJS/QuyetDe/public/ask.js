const maxLength=200;
$("#kitu").on("input", function(){
    var remainChar= maxLength - $("#kitu").val().length;
    $("#remain").text(remainChar);
});