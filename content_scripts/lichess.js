function suc(e) {

    if(e.PGN == undefined) {
        return;
    }

    chrome.storage.local.remove('PGN').then(() => {
        console.log('removed');
    }, err2);

    const PGNTextArea = document.querySelector('#form3-pgn');
    PGNTextArea.value = e.PGN;

    const analysisToggle = document.querySelector('#form3-analyse');
    analysisToggle.click();

    const submitButton = document.querySelector('.form-actions .submit');
    submitButton.click();  
}

function err2(e) {
    console.error(e);
}

setTimeout(() => {
    chrome.storage.local.get('PGN').then(suc, err2);
}, 200);