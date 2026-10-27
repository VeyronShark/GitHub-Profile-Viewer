export async function renderProfileHeading(profileHeading, userData) {
    console.log(userData.avatar_url);
    profileHeading.innerHTML = `
        <figure>
            <img src="${userData.avatar_url}" alt="GitHub Avatar of ${userData.login}" />
        </figure>

        <a id="profile-link" href="https://github.com/${userData.login}">
            <h1>${userData.login}'s Profile</h1>
        </a>
    `;
}
