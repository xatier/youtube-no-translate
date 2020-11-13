(function () {
    // inject JavaScript code to the page so we can hijack some objects
    //
    // ref: https://stackoverflow.com/a/9517879
    var s = document.createElement("script");
    s.defer = true;
    s.src = chrome.extension.getURL("background.js");
    document.body.appendChild(s);
})();
