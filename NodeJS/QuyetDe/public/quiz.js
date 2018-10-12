// axios.get('http://localhost:3100/randomquest')
// .then(function (response) {
//     if(response.data){
//     document.getElementById('qt').innerText=response.data.questionContent;
//     }
//   })
// .catch(function (error) {
//     console.log(error);
//   });

function getRandomQuest(){
  $.ajax({
    url: 'http://localhost:3100/randomquest',
    type: "GET",
    success: function(response){
      if(response){
        $("#qt").text(response.questionContent);
        $(".answer_btn").data("questionid", response.id);
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
  $.ajax({
    url: 'http://localhost:3100/quiz',
    type: 'POST',
    data: $(this).data(),
    success: function(response){
      if(response.success){
        window.location.href = "/vote";
      }
    },
    error: function(err){
      console.log(err);
    }
  })
});

$('#voteResult').on("click", function(){
  $.ajax({
    url: 'http://localhost:3100/vote',
    type: 'GET',
    success: function(response){
      if(response){
        window.location.href = "/vote";
      }
    },
    error: function(err){
      console.log(err);
    }
  })
});

