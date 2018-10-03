

$("article-btn").on("click", function() {

    for (var i = 0; i < data.length; i++) {

        $("#articles").append("<p>" + data[i].title + "<br />" + data[i].link + "<button id = 'add-comment'> Add Comment </button> <button id = 'delete-article'> </button>");
    }



})




$.ajax({
    method: "GET",
    url: "/articles/"
})

    .then(function(data) {
        console.log(data);
        // Add Comments Input (Modal Box)
        // Add Delete Button

    })