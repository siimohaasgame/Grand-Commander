"use strict";
! function() {
    function e(e) {
        console.warn("Failed to register service worker: ", e)
    }
    window.C3_RegisterSW = function() {
        if (navigator.serviceWorker) try {
            navigator.serviceWorker.register("sw.js", {
                scope: "./"
            }).then(function(e) {
                console.log("Registered service worker on " + e.scope)
            }).catch(e)
        } catch (r) {
            e(r)
        }
    }
}();