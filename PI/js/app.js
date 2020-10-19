"use strict";

$(document).ready(function () {
    setInterval(()=>{
        $("#showEstTime").text(moment().format("h:mm:ss a"));
        $("#showIndTime").text(moment().utcOffset(330).format("h:mm:ss a"));
    },1000)
});
