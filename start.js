"use strict";
! function() {
    function t() {
        window.cr_createRuntime({
            exportType: "html5"
        })
    }
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
}();