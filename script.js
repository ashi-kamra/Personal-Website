
   
        //widget functionality
            // when hovered over, the widget changes color
            //when pressed, takes you to a different page
        

    $('.widget').each(function() {
        $(this).on("mouseover", function() {
            console.log("hovering!");
            $(this).css("background-color", "black");
            $(this).css("color", "white")
        }),

        $(this).on("mouseleave", function() {
            $(this).css("background-color", "white");
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
        

    