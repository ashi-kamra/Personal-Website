
   
        //widget functionality
            // when hovered over, the widget changes color
            //when pressed, takes you to a different page

    function changeTagsWhite(parent) {
        if (parent.children().eq(0).is($('#pm-tag'))){
            $('#pm-tag').attr("src", "assets/img/white-pm-tag.svg");
        }
        if (parent.children().eq(0).is($('#web-dev-tag'))){
            $('#web-dev-tag').attr("src", "assets/img/white-webdev-tag.svg");
        }
        if (parent.children().eq(0).is($('#ai-tag'))){
            $('#ai-tag').attr("src", "assets/img/white-ai-tag.svg");
        }
        if (parent.children().eq(0).is($('#personalproject-tag'))){
            $('#personalproject-tag').attr("src", "assets/img/white-personalproject-tag.svg");
        }
    }
    function changeTagsBlack(parent) {
        if (parent.children().eq(0).is($('#pm-tag'))){
            $('#pm-tag').attr("src", "assets/img/black-pm-tag.svg");
        }
        if (parent.children().eq(0).is($('#web-dev-tag'))){
            $('#web-dev-tag').attr("src", "assets/img/black-webdev-tag.svg");
        }
        if (parent.children().eq(0).is($('#ai-tag'))){
            $('#ai-tag').attr("src", "assets/img/black-ai-tag.svg");
        }
        if (parent.children().eq(0).is($('#personalproject-tag'))){
            $('#personalproject-tag').attr("src", "assets/img/black-personalproject-tag.svg");
        }
    }

    $('.widget').each(function() {
        $(this).on("mouseover", function() {
            console.log("hovering!");
            $(this).css("background-color", "black");
            $(this).css("color", "white");
            changeTagsWhite($(this))

        }),

        $(this).on("mouseleave", function() {
            $(this).css("background-color", "white")
            $(this).css("color", "black") 
            changeTagsBlack($(this));

        })
    
    })

    //media query for footer
    if($(window).width() < 800) {
        $('#footer-info').css("display", "flex");
        $('#footer-info').css("margin","1rem");
        $('#footer-info').css("align-items", "center");
        $('#footer-info').css("justify-content", "center");
        $('#footer-text').css("font-size", "1em")

    }

    //on clicking each widget, want to take to a different linked page
    $('#fintech').on("click", function() {
        window.location.replace("fintech.html")
    })
    $('#hackathon').on("click", function() {
        window.location.replace("hackathon.html")
    })
    $('#ai').on("click", function() {
        window.location.replace("ai.html")
    })
    $('#portfolio').on("click", function() {
        window.location.replace("website.html")
    })
    

    //carousel
    const carousel1 = document.querySelector('#art-carousel')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
    })