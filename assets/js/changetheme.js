function getGradient(color) {
    var gradient;

    switch(color) {
        case "purple": gradient = "rgba(105,80,159,1) 50%, "; break;
        case "green": gradient = "rgba(60,118,61,1) 50%, "; break;
        case "knicks":
        case "blue": gradient = "rgba(0,140,221,1) 50%, "; break;
        case "red": gradient = "rgba(145,36,47,1), "; break; 
        case "kings":
        case "trailblazers": gradient = "rgba(0,0,0,1), "; break;
    }

    return gradient;
}

function updateChrome(color) {
        // Change page background
        var background = "background: -webkit-linear-gradient(left, rgba(110,110,110,1) -10%, ";
        
        background = background + getGradient(color);
    
        background = background + "rgba(110,110,110,1) 110%);";
    
        document.getElementsByTagName("body")[0].setAttribute("style", background);
}

function updateFirefox(color) {
        // Change page background
        var background = "background: -moz-linear-gradient(left, rgba(110,110,110,1) -10%, ";
        
        background = background + getGradient(color);
    
        background = background + "rgba(110,110,110,1) 110%);";
    
        document.getElementsByTagName("body")[0].setAttribute("style", background);
}

function changeTheme(color) {
    var themeColor = "#3C763D";
    localStorage.setItem("theme-color", color);

    switch(color) {
        case "purple": themeColor = "#4D3C76"; break;
        case "green": themeColor = "#3C763D"; break;
        case "blue": themeColor = "#008CDD"; break;
        case "red": themeColor = "#91242f"; break;
        case "knicks": themeColor = "#F68428"; break;
        case "trailblazers": themeColor = "#CF1216"; break;
        case "kings": themeColor = "#5A2D83"; break;
    }

    var backgroundStyle = "background-color: " + themeColor + ";";

    // Change the Well
    var well = document.getElementsByClassName("well");
    for  (var i = 0; i < well.length; ++i) {
        well[i].setAttribute("style", backgroundStyle);
    }

    // Change the Panels
    var panels = document.getElementsByClassName("panel-heading");
    for (var i = 0; i < panels.length; ++i) {
        panels[i].setAttribute("style", backgroundStyle);
    }

    // Change the Search

    var buttons = document.getElementsByClassName("search-button");
    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].setAttribute("style", backgroundStyle);
    }

    if (navigator.userAgent.indexOf("Chrome") != -1) {
        updateChrome(color);
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        updateFirefox(color);
    }
}

function deselectButtons() {
    var themeButtons = document.getElementsByClassName("themebutton");
    for (var i = 0; i < themeButtons.length; ++i) {
        themeButtons[i].classList.remove("buttonselected");
    }
}

function selectButton(color) {
    deselectButtons();

    if (!color) {
        color = "purple";
    }

    var button = document.getElementById(color);
    button.classList.add("buttonselected");

    changeTheme(color);
}

function themeButtonClicked() {
    var color = this.id;

    selectButton(color);
}

var themeButtons = document.getElementsByClassName("themebutton");
for (var i = 0; i < themeButtons.length; ++i) {
    themeButtons[i].addEventListener("click", themeButtonClicked);
}

var localColor = localStorage.getItem("theme-color");
selectButton(localColor);