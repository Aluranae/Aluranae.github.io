document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            if (thumbnail.classList.contains("small")) {
                thumbnail.classList.remove("small");
            } else {
                thumbnail.classList.add("small");
            }
        });
    });
});