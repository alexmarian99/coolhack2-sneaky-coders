// Hold ready of pageStatus
$.holdReady(true);

// Set pageStatus as ready
function releaseHold() {
    $.holdReady(false);
};

// Get current language of website
function getLanguage() {
    return navigator.userLanguage || navigator.language  || 'en';
}

function setLanguage(language) {
    navigator.userLanguage = language;
}