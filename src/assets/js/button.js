            
const buttons = document.getElementsByClassName("filter-button");

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click", function(event) {
        var name = event.currentTarget.innerHTML;
        console.log(name);
        var tablinks = document.getElementsByClassName("filter-button");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        event.currentTarget.className += " active";


        var x = document.getElementsByClassName("picture-group");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none" ;
        }
        document.getElementById(name.toLowerCase()).style.display = "flex";

        
    });
}

for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            var name = event.currentTarget.innerHTML;
            console.log(name);
            var tablinks = document.getElementsByClassName("filter-button");
            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            event.currentTarget.className += " active";
            var x = document.getElementsByClassName("picture-group");
            for (var i = 0; i < x.length; i++) {
                x[i].style.display = "none" ;
            }
            document.getElementById(name.toLowerCase()).style.display = "grid";
        });
    }

function btn(buttons) {
    var x = document.getElementsByClassName("picture-group");
    var name = "";
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].classList.contains("active")) {
            name = buttons[i].innerHTML;
        }
    }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none" ;
    }
    document.getElementById(name.toLowerCase()).style.display = "grid";
}

window.onload = btn(buttons);
        