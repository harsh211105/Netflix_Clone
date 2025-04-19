$(".questions").removeClass("hide");
$(".answers").hide();
$(".icon").on("click", function() {
    const answerDiv = $(this).closest(".questions").next(".answers");
    answerDiv.toggle();
    $(this).closest(".questions").addClass("hide");

    if (answerDiv.is(":visible")) {
        $(this).text("-");
    } else {
        $(this).text("+");
        $(this).closest(".questions").removeClass("hide");
    }
});
