$(".speiseplanFilter span").on("click", function () {
    var currentClick = this.getAttribute("data-categ");
    $(".speiseplanFilter span").removeClass('active');
    $(this).addClass('active');
    console.log("Current Click: " + currentClick);
    $(".cardsList .card").each(function (index) {
        if (currentClick == "*") {
            $(this).show();
        } else {
            if (currentClick == this.getAttribute("data-categ")) {
                $(this).slideDown();
            } else {
                $(this).slideUp();
            }
        }
    });
});

$(".card-action-plus").on("click", function () {
    $(this).parent().parent().parent().find('.card-body-description').slideDown();
});

$(".card-body-heart").on("click", function () {
    $(this).toggleClass('like');
});



/* Wysiwyg Bootstrap Editor */

tinymce.init({
    selector: 'textarea#editor',
});

/* Click on Neue Speise Button */
$(".btnNewSpeise").on("click", function () {
    if ($('.formNewSpeise').hasClass('isOpen')) {
        $('.formNewSpeise').slideUp();
        $('.formNewSpeise').removeClass('isOpen');
    } else {
        $('.formNewSpeise').slideDown();
        $('.formNewSpeise').addClass('isOpen');
    }
});


/* Click on Form Speichern  */
$(".formNewSpeise .btn-primary").on("click", function () {

});