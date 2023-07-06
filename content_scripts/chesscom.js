function copyPGN() {
    const PGNTextArea = document.querySelector('.share-menu-tab-pgn-textarea');
    const PGN = PGNTextArea.value;

    const closeModal = document.querySelector('.ui_outside-close-icon');
    closeModal.click();

    window.open('http://www.lichess.org/paste', '_blank').focus();

    chrome.storage.local.set({
        'PGN': PGN
    });
}

function addButton() {

    const tag = document.querySelector('.game-review-buttons-component');

    if(tag == null) {
        return;
    }

    clearInterval(interval);

    const newButton = document.createElement('button');
    newButton.className = 'lichess-analysis-button';
    newButton.innerHTML = 'Bilan sur Lichess';
    newButton.onclick = () => {

        const shareButton = document.querySelector('.live-game-buttons-button');
        shareButton.click();

        let PGNShare;

        const interval2 = setInterval(() => {
            PGNShare = document.querySelector('.share-menu-tab-selector-tab');
            if(PGNShare != null) {
                PGNShare.click();

                clearInterval(interval2);
                copyPGN();
            }
        }, 50);

    }

    let newTag = true;
    Array.from(tag.children).forEach((e) => {
        if(e.classList.contains(newButton.className)) {
            newTag = false;
        }
    });

    if(newTag) {
        tag.appendChild(newButton);
    }

}

console.log('loaded');
const interval = setInterval(addButton, 50);