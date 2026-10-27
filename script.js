import { showSearchError, hideSearchError } from "./dataHandler.js";
import { renderProfileHeading, renderFollows, renderRepos } from "./display.js";

const DEBUG = true;

const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const errorMsg = document.getElementById("search-error");
const profileHeading = document.getElementById("profile-heading");
const follows = document.getElementById("follows");
const reposContainer = document.getElementById("repos");

searchBtn.addEventListener("click", async () => {
    if (searchBar.value.trim() === "") return;

    const userData = await getUser(searchBar.value);

    renderProfileHeading(profileHeading, userData);
    renderFollows(follows, userData);

    const repos = await getRepos(userData);

    renderRepos(reposContainer, repos);
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

async function getRepos(userData) {
    try {
        const response = await axios.get(userData.repos_url);

        if (DEBUG) console.log(response.data);

        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}
