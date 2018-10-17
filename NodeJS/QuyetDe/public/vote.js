const params= new URL(window.location.href).pathname.split("/");
const questionId = params[params.length-1];
console.log(window.location.href);

$.ajax({
    url: '/questiondetail/'+questionId,
    type: "GET",
    success: function(response){
      if(response){
        console.log(response.question);
        let question= response.question;
        let totalVote = question.yes+question.no;
        $("#questvote").text(question.questionContent);
        $("#totalvote span").text(totalVote);
        $("#voteYes span").text(totalVote !=0 ? parseFloat((question.yes/totalVote*100).toFixed(2)) : 0);
        $("#voteNo span").text(totalVote !=0 ? parseFloat((question.no/totalVote*100).toFixed(2)) : 0);
      }
    },
    error: function(err){
      console.log(err);
    }
  })
