var buttonOpen = document.getElementById("otvaraj");
var buttonClose = document.getElementById("zatvaraj");

buttonOpen.addEventListener("click", function openNav() {
                             document.getElementById('nav').style.height = "100%";
                             });

buttonClose.addEventListener("click", function closeNav() {
                            document.getElementById('nav').style.height = "0%";
});