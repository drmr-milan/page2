let buttonOpen = document.getElementById("otvaraj");
let buttonClose = document.getElementById("zatvaraj");
let idi1 = document.getElementById("zatvari1");
let idi2 = document.getElementById("zatvari2");
let idi3 = document.getElementById("zatvari3");
let idi4 = document.getElementById("zatvari4");
let idi5 = document.getElementById("zatvori5");
let element = document.getElementById("h4cls");

buttonOpen.addEventListener("click", function openNav() {
                             document.getElementById('nav').style.height = "100%";       
                             });

buttonClose.addEventListener("click", function closeNav() {
                            document.getElementById('nav').style.height = "0%";
});

idi1.addEventListener("click", function closeNav() {
    document.getElementById('nav').style.height = "0%";
});

idi2.addEventListener("click", function closeNav() {
    document.getElementById('nav').style.height = "0%";
});

idi3.addEventListener("click", function closeNav() {
    document.getElementById('nav').style.height = "0%";
});

idi4.addEventListener("click", function closeNav() {
    document.getElementById('nav').style.height = "0%";
});

idi5.addEventListener("click", function closeNav() {
    document.getElementById('nav').style.height = "0%";
});




/*
btn.addEventListener("click", function aha() {
    if(name!=""){
        return element.innerHTML = "Email has been send.";

        setTimeout(function (){
            element.style.display = "none";
        },3000);

        document.getElementById('contactForm').reset();
    } else {
        return element.innerHTML = "Email has not been send. Check form";
    }
});
*/