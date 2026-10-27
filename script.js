import { showSearchError, hideSearchError } from "./dataHandler.js";

const DEBUG = false;

const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const errorMsg = document.getElementById("search-error");

searchBtn.addEventListener("click", () => {
    if (searchBar.value.trim() === "") return;

    getUser(searchBar.value);
});

async function getUser(username) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`,
        );

        if (DEBUG) console.log(response.data);

        hideSearchError(errorMsg);
    } catch (e) {
        showSearchError(errorMsg, e.status);
    }
}
