

/*<===== MENU BUTTON AND SLIDER FUNCTION =====>*/

    function openSlider() {
        document.getElementById("menuOpen").style.display = "hidden";
        document.getElementById("menuClose").style.zIndex = "100";
        document.getElementById("menuSlider").style.width = "400px";
        document.getElementById("menuSlider").style.marginRight = "-1%";
        document.getElementById("menuSlider").style.visibility = "visible";
    }
    
    function closeSlider() {
        document.getElementById("menuOpen").style.display = "visible";
        document.getElementById("menuClose").style.zIndex = "1";
        document.getElementById("menuSlider").style.width = "0";
        document.getElementById("menuSlider").style.marginRight = "-400px";
        document.getElementById("menuSlider").style.visibility = "hidden";
    }
