//Setup of important window features for the application's operation.
window.onerror = function(e) {
    console.error(e);
};

window.resizeScreen = function(x, y) {
    if(typeof x != "number") x = 0;
    if(typeof y != "number") y = 0;
    window.external.ResizeScreen(x, y);
}

window.setTitle = function(title) {
    if(!title) title = "";
    window.external.SetTitle(title);
}

window.setIcon = function(icon) {
    if(!icon) return;
    window.external.SetIcon(icon);
}

window.setIcon("./environment/favicon.ico");
window.setTitle(document.title);

//TODO: window.lockResize function
window.lockResize = function(bool) {
    if(bool) {

    }
    else {

    }
}

window.alert = function(message, title) {
    if(!message) message = " ";
    if(!title) title = " ";
    if(sessionStorage.getItem("$one-time-reload-pattern")) {
        window.external.Alert(message, title);
    }
}

window.responsivityTrigger = function() {
    window.external.ResponsiveTrigger();
}

//console contains all available functionality related to using the development tools console.
window.console = {
    output: [],
    log: function() {
        var args = Array.from(arguments).toString();
        console.output.push(args);
    },

    error: function() {
        var args = Array.from(arguments).toString();
        console.output.push("[X] Error: " + args);
    },
};