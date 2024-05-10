// start login form page
let $ = document;

let signIn = $.querySelector(".signIn");
let inpT = $.querySelector("#inp-t");
let inpP = $.querySelector("#inp-p");
let inpP2 = $.querySelector("#inp-p2");
let svgPass = $.querySelector("#svg-pass");
let svgUser = $.querySelector("#svg-user");
let svgRepeatP = $.querySelector(".svg-repeat-p");
let btnLogin = $.querySelector(".btn-login");
// ----------------------------------------------------
let passNotValid = $.querySelector(".sp-pass");
let UserNotValid = $.querySelector(".sp-user");
let svgWrong1 = $.querySelector(".svg-wrong1");
let svgWrong2 = $.querySelector(".svg-wrong2");
let svgWrong3 = $.querySelector(".svg-wrong3");
let spPlsFill = $.querySelector(".sp-pls-fill");
let signInEror = $.querySelector(".signInEror");
let pass2NotSame = $.querySelector(".sp-pass2-not-same");
let spCheckShort = $.querySelector(".sp-check-short");
let spCheckGood = $.querySelector(".sp-check-good");
let spCheckStrong = $.querySelector(".sp-check-strong");
// ----------------------------------------------------

btnLogin.addEventListener("click", function () {
    spCheckGood.style.visibility = "hidden";
    spCheckShort.style.visibility = "hidden";
    spCheckStrong.style.visibility = "hidden";
    if (inpT.value.length < 5) {
        svgUser.style.color = "red";
        UserNotValid.style.visibility = "visible";
        svgWrong1.style.visibility = "visible";
    } else {
        svgUser.style.color = "green";
        UserNotValid.style.visibility = "hidden";
        svgWrong1.style.visibility = "hidden";
    }
    if (inpP.value.length < 5) {
        svgPass.style.color = "red";
        passNotValid.style.visibility = "visible";
        svgWrong2.style.visibility = "visible";
    } else {
        svgPass.style.color = "green";
        passNotValid.style.visibility = "hidden";
        svgWrong2.style.visibility = "hidden";
    }
    if (inpP2.value != inpP.value) {
        svgRepeatP.style.color = "red";
        pass2NotSame.style.visibility = "visible";
        svgWrong3.style.visibility = "visible";
    }
    else {
        svgRepeatP.style.color = "green";
        pass2NotSame.style.visibility = "hidden";
        svgWrong3.style.visibility = "hidden";
    }
})
btnLogin.addEventListener("click", function () {
    if (inpT.value == "") {
        spPlsFill.style.visibility = "visible";
    }
    if (inpP.value == "") {
        spPlsFill.style.visibility = "visible";
        svgRepeatP.style.color = "red";
    } else if (inpP2.value == "") {
        spPlsFill.style.visibility = "visible";
        svgRepeatP.style.color = "red";
    }
    else {
        spPlsFill.style.visibility = "hidden";
    }
})
// sign in btn click to check valid data or not if not show eror

inpT.addEventListener("keydown", function () {
    svgWrong1.style.visibility = "hidden";
    UserNotValid.style.visibility = "hidden";
    if (inpT.value.length <= 3) {
        svgUser.style.color = "red";
    } else if (inpT.value.length < 5) {
        svgUser.style.color = "rgb(200 ,215 , 13)";
    } else if (inpT.value.length >= 8) {
        svgUser.style.color = "rgb(0 ,180 , 20)";
    }
})
inpP.addEventListener("keydown", function () {
    svgWrong2.style.visibility = "hidden";
    passNotValid.style.visibility = "hidden";
    if (inpP.value.length <= 3) {
        svgPass.style.color = "red";
        spCheckShort.style.visibility = "visible";
        spCheckStrong.style.visibility = "hidden";
        spCheckGood.style.visibility = "hidden";
    } else if (inpP.value.length < 5) {
        svgPass.style.color = "rgb(200 ,215 , 13)";
        spCheckGood.style.visibility = "visible";
        spCheckShort.style.visibility = "hidden";
        spCheckStrong.style.visibility = "hiddden";
    } else if (inpP.value.length >= 8) {
        svgPass.style.color = "rgb(0 ,180 , 20)";
        spCheckStrong.style.visibility = "visible";
        spCheckGood.style.visibility = "hidden";
        spCheckShort.style.visibility = "hidden";
    } if (inpP.value == "") {
        spCheckShort.style.visibility = "hidden";
    }
})
// check validation data and strong or weak pass