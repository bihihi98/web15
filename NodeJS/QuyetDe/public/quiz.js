function getRandomQuest(){
  $.ajax({
    url: 'http://localhost:3100/randomquest',
    type: "GET",
    success: function(response){
      if(response){
        $("#qt").text(response.questionContent);
        $(".answer_btn").data("questionid", response.id);
        $("#viewDetail").attr("href", "/question/" + response.id);
      }
    },
    error: function(err){
      console.log(err);
    }
  })
}
getRandomQuest();
$('#otherQuest').on("click", function(){getRandomQuest()});

$('.answer_btn').on("click", function(){
  console.log($(this).data());
  let questionId= $(this).data("questionid")
  $.ajax({
    url: 'http://localhost:3100/quiz',
    type: 'POST',
    data: $(this).data(),
    success: function(response){
      if(response.success){
        window.location.href = "/question/" + questionId;
      }
    },
    error: function(err){
      console.log(err);
    }
  })
});



