

$("article-btn").on("click", function() {

    // Generate Headline, Summary, URL, and Photo


    $.ajax({
        method: "GET",
        url: "/articles/"
    })

        .then(function(data) {
            console.log(data);

            // Show the Headlines

            // Show the Summary

            // Show the URL

            // Show the Photo


            // Add Comments Input (Modal Box)
            // Add Delete Button

        })

})