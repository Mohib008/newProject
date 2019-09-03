$("#btn").click(function() {
    $("#input").focus();
});

$(".p").hover(
    function() {
        $(this).css("border", "1px solid red");
    }, 
    function() {
        $(this).css("border", 0);
    },
    function() {
        $(this).css("background-color", "red");
    }
);

$("#input").click(function() {
    $(this).next().toggle();
});


$("#input-3").click(function() {
    if($("#input-2").val() !="") {
        $(this).submit();
    }
});

$("document").ready(function() {
    $("img").css("border", "1rem solid black");
});

$("document").ready(function() {
    $("#textBox").on("click", whenMouseIsClicked);
    $("#textBox").on("mouseleave", whenMouseLeave);

    function whenMouseIsClicked() {
        $("#textBox").html("<h1>You Clicked Me</h1>");
    }

    function whenMouseLeave() {
        $("#textBox").html("<h1>Where are you going?</h1>");
    }
});

