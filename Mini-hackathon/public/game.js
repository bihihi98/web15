const params = new URL(window.location.href).pathname.split("/");
const gameId = params[params.length - 1];
console.log(window.location.href);

$.ajax({
    url: '/gamedetail/' + gameId,
    type: "GET",
    success: function (response) {
        if (response) {
            console.log(response.game);
            let game = response.game;
            let sumscore = game.score1+game.score2+game.score3+game.score4;
            $("#p1").text(game.playerName1);
            $("#p2").text(game.playerName2);
            $("#p3").text(game.playerName3);
            $("#p4").text(game.playerName4);
            $("#sum").text(sumscore);
            $("#s1").text(game.score1);
            $("#s2").text(game.score2);
            $("#s3").text(game.score3);
            $("#s4").text(game.score4);
            // $("#totalvote span").text(totalVote);
            // $("#voteYes").text(totalVote != 0 ? yesPc : 0);
            // $("#voteNo").text(totalVote != 0 ? noPc : 0);
            // document.getElementById("yesPc").style.width = yesPc + "%";
            // document.getElementById("noPc").style.width = noPc + "%";
            // $("div#result_bar").html(`<div class="progress" style="height: 60px><div class="progress-bar bg-danger style="width: ${yesPc}% role="progressbar" aria-valuemin="0" aria-valuemax="100"><span id="voteYes"></span>% đúng</div></div>
            // <div class="progress" style="height: 60px"><div class="progress-bar bg-secondary" style="width: ${noPc}%" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span id="voteNo"></span>% sai</div></div>`)
        }
    },
    error: function (err) {
        console.log(err);
    }
})