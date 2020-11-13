function go() {
    // get real title from meta tag
    const realTitle = document.querySelector('meta[name="title"]').content;

    // hijack ytplayer object
    const videoDetails = JSON.parse(ytplayer.config.args.player_response)
        .videoDetails;

    let title = document.querySelector(".title").children[0];
    let content = document.querySelector(".content").children[0];

    if (!realTitle || !title) {
        // page not fully loaded yet
        return;
    }

    if (realTitle === title.innerText) {
        // already replaced
        return;
    }

    title.innerText = realTitle;
    content.innerText = videoDetails.shortDescription;
}

(function () {
    let observer = new MutationObserver(go);
    observer.observe(document.body, { childList: true, subtree: true });
})();
