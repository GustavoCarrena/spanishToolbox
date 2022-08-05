

const root = document.getElementById("root")


$(document).ready(function(){
    $('#leftBookcase').plaxify({"xRange":25,"yRange":0,"data-invert":false})
    $('#calendar').plaxify({"xRange":15,"yRange":0,"data-invert":true})
    $('#watch').plaxify({"xRange":10,"yRange":0,"data-invert":true})
    $('#desk').plaxify({"xRange":100,"yRange":0,"data-invert":true})
    $('#screen').plaxify({"xRange":-20,"yRange":0,"data-invert":true})
    $('#hello_msg').plaxify({"xRange":-26,"yRange":0})
    $('#apple').plaxify({"xRange":112,"yRange":0,"data-invert":false})
    $('#lamp').plaxify({"xRange":117,"yRange":0,"data-invert":false})
    $('#rightBookcase').plaxify({"xRange":25,"yRange":0,"data-invert":false})

    $.plax.enable()
    });
