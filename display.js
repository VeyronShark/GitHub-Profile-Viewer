export async function renderProfileHeading(profileHeading, userData) {
    profileHeading.innerHTML = `
        <figure>
            <img src="${userData.avatar_url}" alt="GitHub Avatar of ${userData.login}" />
        </figure>

        <a id="profile-link" href="https://github.com/${userData.login}" target="_blank">
            <h1>${userData.login}'s Profile</h1>
        </a>
    `;
}

export async function renderFollows(follows, userData) {
    follows.innerHTML = `
        <p>Followers: ${userData.followers}</p>
        <p>Following: ${userData.following}</p>
    `;
}

export async function renderRepos(reposContainer, repos) {
    reposContainer.innerHTML = "";

    repos.forEach((repo) => {
        const div = document.createElement("div");
        div.classList.add("repo");
        div.innerHTML = `
            <a href="${repo.html_url}" target="_blank"><h2>${repo.name}</h2></a>
            <p>${repo.description ? repo.description : "No description available"}</p>
        `;
        reposContainer.appendChild(div);
    });
}
