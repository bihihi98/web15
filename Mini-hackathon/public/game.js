const params = new URL(window.location.href).pathname.split("/");
const gameId = params[params.length - 1];
let i=1;
let r;
function result() {
    $.ajax({
        url: '/gamedetail/' + gameId,
        type: "GET",
        success: function (response) {
            if (response) {
                console.log(response.game);
                let game = response.game;
                let sumscore = game.score1 + game.score2 + game.score3 + game.score4;
                $("#player1").text(game.playerName1);
                $("#player2").text(game.playerName2);
                $("#player3").text(game.playerName3);
                $("#player4").text(game.playerName4);
                $("#sum span").text(sumscore);
                $("#s1").text(game.score1);
                $("#s2").text(game.score2);
                $("#s3").text(game.score3);
                $("#s4").text(game.score4);
                r = game.round;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}
result();
addround()
function addround() {
    $(`.btn`).on("click", function () {
        var String = (`
   <tr>
            <th scope="row">Round ${i}</th>
            <th scope="row"><input type="number" class="form-control" name="score1" id="score1" data-idgame="" data-score="score1" value="" placeholder=""></th>
            <th scope="row"><input type="number" class="form-control" name="score2" id="score2" data-idgame="" data-score="score2" value="" placeholder=""></th>
            <th scope="row"><input type="number" class="form-control" name="score3" id="score3" data-idgame="" data-score="score3" value="" placeholder=""></th>
            <th scope="row"><input type="number" class="form-control" name="score4" id="score4" data-idgame="" data-score="score4" value="" placeholder=""></th>
        </tr>
    `);
        $("#score").append(String);
        i++;
        
    })

}

$(document).on("input", ".form-control", function () {
    $(".form-control").data("idgame", gameId);
    $(".form-control").data("scoreinc", $(".form-control").val());
    console.log($(this).data());
    $.ajax({
        url: "http://localhost:8080/game",
        type: "POST",
        data: $(this).data(),
        success: function (response) {
            if (response.success) {
                // window.location.href = "/game/" + gameId;
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
    result();
});