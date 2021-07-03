

/*<======== MENU BUTTON ========>*/

    function openSlider() {
        

        /*<======== OPEN MENU BUTTON 'ON OPEN' ========>*/
        document.getElementById("menuOpen").style.display = "none";
        document.getElementById("menuClose").style.display = "flex";

        /*<======== MENU SLIDER LIST 'ON OPEN' ========>*/
        document.getElementById("menuSlider").style.right = "0";

        /*<======== MENU TEXT TRANSITION 'ON OPEN' ========>*/
        document.getElementById("menuSliderLink").style.opacity = "100%";

        /*<======== BODY SCROLL 'STOP' ========>*/
        document.getElementById("bodyScroll").style.overflow = "hidden";
        
    }
    

    function closeSlider() {

        /*<======== CLOSE BUTTON 'ON CLOSE' ========>*/
        document.getElementById("menuOpen").style.display = "flex";
        document.getElementById("menuClose").style.display = "none";

        /*<======== MENU SLIDER LIST 'ON CLOSE' ========>*/
        document.getElementById("menuSlider").style.right = "-300px";

        /*<======== MENU TEXT TRANSITION 'ON CLOSE' ========>*/
        document.getElementById("menuSliderLink").style.opacity = "0";
        document.getElementById("menuSliderLink").style.opacity = "0";

        /*<======== BODY SCROLL 'STOP' ========>*/
        document.getElementById("bodyScroll").style.overflow = "visible";


        
    }



