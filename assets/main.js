let counter1 = 1;
let counter2 = 1;
$(".value-control1").val(1);
$(".value-control2").val(1);
let valC1 = $(".value-control1");
let valC2 = $(".value-control2");
let increase1 = $(".increase1");
let decrease1 = $(".decrease1");
let increase2 = $(".increase2");
let decrease2 = $(".decrease2");


increase1.click(function () {
    valC1.val((counter1 += 1));
});

increase2.click(function () {
    valC2.val((counter2 += 1));
});

// to increase value by click on + in cart page

decrease1.click(function () {
    if (valC1.val() != 0) {
        valC1.val((counter1 -= 1));
    }else {
        valC1.val((counter1 = 0));
    }
});

decrease2.click(function () {
    if (valC2.val() != 0) {
        valC2.val((counter2 -= 1));
    }else {
        valC2.val((counter2 = 0));
    }
});

// to decrease value by click on - and stop counter when counter on number 0 in cart page
// -----------------------------------------------------------------