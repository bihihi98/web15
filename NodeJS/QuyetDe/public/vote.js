const params = new URL(window.location.href).pathname.split("/");
const questionId = params[params.length - 1];
console.log(window.location.href);

$.ajax({
  url: '/questiondetail/' + questionId,
  type: "GET",
  success: function (response) {
    if (response) {
      console.log(response.question);
      let question = response.question;
      let totalVote = question.yes + question.no;
      let yesPc = parseFloat((question.yes / totalVote * 100).toFixed(2));
      let noPc = parseFloat((question.no / totalVote * 100).toFixed(2));
      $("#questvote").text(question.questionContent);
      $("#totalvote span").text(totalVote);
      $("#voteYes").text(totalVote != 0 ? yesPc : 0);
      $("#voteNo").text(totalVote != 0 ? noPc : 0);
      document.getElementById("yesPc").style.width= yesPc + "%";
      document.getElementById("noPc").style.width= noPc + "%";
      // $("div#result_bar").html(`<div class="progress" style="height: 60px><div class="progress-bar bg-danger style="width: ${yesPc}% role="progressbar" aria-valuemin="0" aria-valuemax="100"><span id="voteYes"></span>% đúng</div></div>
      // <div class="progress" style="height: 60px"><div class="progress-bar bg-secondary" style="width: ${noPc}%" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span id="voteNo"></span>% sai</div></div>`)
    }
  },
  error: function (err) {
    console.log(err);
  }
})
