$.ajax({
    url: 'http://localhost:8080/',
    type: "GET",
    success: function (response) {
        if (response) {
            $("#viewround").attr("href", "/game/" + response._id);
        }
    },
    error: function (err) {
        console.log(err);
    }
})