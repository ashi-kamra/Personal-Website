
   
        //widget functionality
            // when hovered over, the widget changes color
            //when pressed, takes you to a different page
        
    function changeTags(parent){
         //use .children() to match up the widget that is firing with the tag

        $('.tag').each(function() {
            $('#pm-tag').attr("src", "assets/img/white-pm-tag.svg");
            $('#web-dev-tag').attr("src", "assets/img/white-webdev-tag.svg");
            $('#ai-tag').attr("src", "assets/img/white-ai-tag.png");
            $('#personalproject-tag').attr("src", "assets/img/white-personalproject-tag.svg");
        })
    }

    $('.widget').each(function() {
        $(this).on("mouseover", function() {
            console.log("hovering!");
            $(this).css("background-color", "black");
            $(this).css("color", "white");
            changeTags($(this))
        }),

        $(this).on("mouseleave", function() {
            $(this).css("background-color", "white")
            $(this).css("color", "black") 
        })
    
    })

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
        

    