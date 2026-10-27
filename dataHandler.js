export function showSearchError(errorMsg, errorCode) {
    let text;

    switch (errorCode) {
        case 404:
            text = "Username not found";
            break;
        default:
            text = "Failed to fetch data";
    }

    errorMsg.textContent = text;
    errorMsg.hidden = false;
}

export function hideSearchError(errorMsg) {
    errorMsg.hidden = true;
}
