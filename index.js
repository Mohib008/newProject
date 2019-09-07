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

// Eventlistener

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

//Show and Hide event

$("document").ready(function() {
    $("#show").on("click", function() {
        $("#textBox-1").show();
    });

    $("#hide").on("click", function(){
        $("#textBox-1").hide();
    });
});

// hover effects

$("document").ready(function() {
    $(".textCopy").hover(highlightCopy);
    function highlightCopy() {
        $(this).toggleClass("highlight");
    };
  });

$("document").ready(function() {
    $("#fade-in").on("click", function() {
        $("#textBox-2").fadeIn(3000, function() {
            alert("I'm dane!");
        });
    });

    $("#fade-out").on("click", function() {
        $("#textBox-2").fadeOut(3000, function() {
            alert("I am done!");
        });
    });
});

//slide text function. 

$("docment").ready(function() {
    $("#slide-up").click(function() {
        $("#textBox-3").slideUp("2000", "linear");
    });

    $("#slide-down").click(function() {
        $("#textBox-3").slideDown("2500", "linear");
    });

    $("#toggleSlide").click(function() {
        $("#textBox-3").slideToggle("2500", function() {
            alert("Done");
        });
    });
});


$("docment").ready(function() {
    $("#slide-up").click(function() {
        $("#img-1").slideUp("2000", "linear");
    });

    $("#slide-down").click(function() {
        $("#img-1").slideDown("2500", "linear");
    });

    $("#toggleSlide").click(function() {
        $("#img-1").slideToggle("2500", function() {
            alert("Done");
        });
    });
});

//toggling me function. 

$("document").ready(function() {
    $("#toggleMe").click(function() {
        $("#textBox-4").toggle(4000, "swing");
    });
});

// Animation = Grow, Move, bigger and many.

$("document").ready(function() {
    $("#growMe").click(function() {
        $("#textBox-5").animate({ width: "500px"},2000);
    });

    $("#move").click(function() {
        $("#textBox-5").animate({marginLeft: "200px"},1000);
    });

    $("#bigger").click(function() {
        $("#textBox-5").animate({fontSize: "40px"},3000);
    });

    $("#many").click(function() {
        $("#textBox-5").animate({fontSize: "40px", marginLeft: "200px", width: "300px"},3000);
    });
});

