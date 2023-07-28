function clear(id, index) {
    document.getElementById(id).style.display = "none";
    bookingitems[index].style.backgroundColor = "white";
    bookingitems[index].style.color = "blue";


}

function globalClick() {
    clear("fl", "0");
    clear("hb", "1");
    clear("cb", "2");
    clear("crb", "3");
    clear("pb", "4");
}
let bookingitems = document.getElementsByClassName("booking-items");
var a = false;


bookingitems[0].addEventListener("click", function display() {


    clear("hb", "1");
    clear("cb", "2");
    clear("crb", "3");
    clear("pb", "4");



    bookingitems[0].style.backgroundColor = "#1a1a48db";
    bookingitems[0].style.color = "white";
    document.getElementById("fl").style.display = "flex";



})
bookingitems[1].addEventListener("click", function dissplay() {


    clear("fl", "0");
    clear("cb", "2");
    clear("crb", "3");
    clear("pb", "4");




    bookingitems[1].style.backgroundColor = "#1a1a48db";
    bookingitems[1].style.color = "white";
    document.getElementById("hb").style.display = "flex";




})

bookingitems[2].addEventListener("click", function disssplay() {
    clear("fl", "0");
    clear("hb", "1");
    clear("crb", "3");
    clear("pb", "4");

    bookingitems[2].style.backgroundColor = "#1a1a48db";
    bookingitems[2].style.color = "white";
    document.getElementById("cb").style.display = "flex";


})

bookingitems[3].addEventListener("click", function dissssplay() {
    clear("fl", "0");
    clear("hb", "1");
    clear("cb", "2");
    clear("pb", "4");

    bookingitems[3].style.backgroundColor = "#1a1a48db";
    bookingitems[3].style.color = "white";
    document.getElementById("crb").style.display = "flex";

})

bookingitems[4].addEventListener("click", function disssssplay() {
    clear("fl", "0");
    clear("hb", "1");
    clear("cb", "2");
    clear("crb", "3");

    bookingitems[4].style.backgroundColor = "#1a1a48db";
    bookingitems[4].style.color = "white";
    document.getElementById("pb").style.display = "flex";
})

function hide(id) {
    let hide = document.getElementsByClassName("hide");
    hide[0].style.display = "none";
    hide[1].style.display = "none";
    hide[2].style.display = "none";
    hide[3].style.display = "none";
    hide[4].style.display = "none";
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "blue";


}

function glow(id) {
    document.getElementById(id).style.backgroundColor = "#1a1a48db";
    document.getElementById(id).style.color = "white";
}

function reverse(id) {
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "blue";

}

//special deal effects
setInterval(function change() {
    document.getElementById("specialdeals").style.letterSpacing = ".5em";
    document.getElementById("specialdeals").style.fontSize = "2.3vw";
    document.getElementById("specialdeals").style.color = "#ff00ff";
    document.getElementById("specialdeals").style.fontWeight = "900";
    document.getElementById("specialdeals").style.fontFamily = "'Silkscreen','Lobster', cursive";
    document.getElementById("specialdeals").style.transitionProperty = "all";
    document.getElementById("specialdeals").style.transitionDuration = "2s";

    setTimeout(function re() {
        document.getElementById("specialdeals").style.letterSpacing = "2px";
        document.getElementById("specialdeals").style.fontSize = "1.3vw";
        document.getElementById("specialdeals").style.color = "#876D97";
        document.getElementById("specialdeals").style.fontWeight = "400";
        document.getElementById("specialdeals").style.fontFamily = "'Noto Serif', serif";
        document.getElementById("specialdeals").style.transitionProperty = "all";
        document.getElementById("specialdeals").style.transitionDuration = "2s";

    }, 2000);

}, 4000);

//special deals images hover effect

// let deal_content = document.getElementsByClassName("deal_content");
// document.getElementById("d_1").addEventListener("mouseover", function fun() {
//     document.getElementById("km").style.display = "block";
//     document.getElementById("km").style.transitionProperty = "all";
//     document.getElementById("km").style.transitionDuration = "2s";

// })

// function back(index) {
//     deal_content[index].style.display = "none";
//     deal_content[index].style.transitionDuration = "2s";
// }
// for (let index = 0; index <= 3; index++) {
//     if (index == 0 && index < 3) {

//         deal_content[index].style.display = "block";
//         deal_content[index].style.transitionDuration = "2s";
//         back(index);
//     }
// }

// console.log(document.getElementsByClassName("deal_content"))\