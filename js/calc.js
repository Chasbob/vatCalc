$(document).ready(function () {
    $("#test").click(function () {
        context();
    })
    $("#calculate-net").click(function(){
        var rate = $("#vatCodeId");
        var gross = $("#defaultForm-gross");
        setNet(rate.val(), gross.val());
    })
    $("#calculate-gross").click(function(){
        var rate = $("#vatCodeId");
        var net = $("#defaultForm-net");
        setGross(rate.val(), net.val())
    })
});

function context() {
    var gross = $("#defaultForm-gross");
    var net = $("#defaultForm-net");
    var rate = $("#vatCodeId");
    var check = $("#is-gross");

    if (check.is(":checked")) {
        if (!net.val()) {
            alert("you haven't set net");
        } else {
            setGross(rate.val(), net.val())
        }
    } else {
        if (!gross.val()) {
            alert("you haven't set gross");
        } else {
            setNet(rate.val(), gross.val());
        }
    }
}


function setGross(rate, net) {
    var gross = $("#defaultForm-gross")
    gross.val((parseFloat(net) + (rate * net)).toFixed(2));
    // return net + (rate * net);
}

function setNet(rate, gross) {
    var net = $("#defaultForm-net");
    net.val((parseFloat(gross) / (1 + parseFloat(rate))).toFixed(2));
}


