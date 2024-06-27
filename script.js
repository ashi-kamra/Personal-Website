
   
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
            $('#ai-tag').attr("src", "assets/img/white-ai-tag.png");
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
            $('#ai-tag').attr("src", "assets/img/black-ai-tag.png");
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

    // $('.tag').each(function() {
    //     $(this).on("mouseover", function() {
    //         $('#pm-tag').attr("src", "assets/img/white-pm-tag.svg");
    //         $('#web-dev-tag').attr("src", "assets/img/white-webdev-tag.svg");
    //         $('#ai-tag').attr("src", "assets/img/white-ai-tag.png");
    //         $('#personalproject-tag').attr("src", "assets/img/white-personalproject-tag.svg");
    //     }),

    //     $(this).on("mouseleave", function() {
    //         $('#pm-tag').attr("src", "assets/img/black-pm-tag.svg");
    //         $('#web-dev-tag').attr("src", "assets/img/black-webdev-tag.svg");
    //         $('#ai-tag').attr("src", "assets/img/black-ai-tag.png");
    //         $('#personalproject-tag').attr("src", "assets/img/black-personalproject-tag.svg");
    //     })
    // })

    // var widgs = document.getElementsByClassName("widget") //returns an array
    // console.log(widgs)
     
    // document.addEventListener("mouseenter", function(event) {
    //     console.log("working!")
    //     for (var i = 0; i < widgs.length; i++){
    //         widgs[i].style.backgroundColor = "black"
    //     }
    // })

    // document.addEventListener("mouseleave", function(event) {
    //     console.log("working!")
    //     for (var i = 0; i < widgs.length; i++){
    //         widgs[i].style.backgroundColor = "white"
    //     }
    // })
        

    