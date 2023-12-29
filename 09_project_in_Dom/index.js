const buttons = document.querySelectorAll(".button");
//console.log(buttons);
const body = document.querySelector("body");
//console.log(body);

buttons.forEach(function (button) {
    //console.log(button)

    button.addEventListener("click",function(e) {
        // console.log(e);
        // console.log(e.target)//help us to find target from where event is coming
        
        

        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
    });
});