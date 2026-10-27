import { showSearchError, hideSearchError } from "./dataHandler.js";
import { renderProfileHeading } from "./display.js";

const DEBUG = false;

const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const errorMsg = document.getElementById("search-error");
const profileHeading = document.getElementById("profile-heading");

searchBtn.addEventListener("click", async () => {
    if (searchBar.value.trim() === "") return;

    const userData = await getUser(searchBar.value);

    renderProfileHeading(profileHeading, userData);
});

async function getUser(username) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`,
        );

        if (DEBUG) console.log(response.data);

        hideSearchError(errorMsg);
        return response.data;
    } catch (e) {
        showSearchError(errorMsg, e.status);
    }
}
