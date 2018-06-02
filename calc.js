$(document).ready(function () {
    $("#test").click(function () {
        calc()
    })

});

function calc() {
    // language=JQuery-CSS
    alert( $("#defaultForm-gross").val());
}

function getGross(rate, net) {
    return net + (rate * net);
}

function getNet(rate, gross) {

}

function getVAT(rate, gross) {

}

