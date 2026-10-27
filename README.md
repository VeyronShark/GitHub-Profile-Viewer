# GitHub Profile Viewer

<div align="center">

### Find a GitHub profile. Explore its repositories.

A lightweight browser app for looking up a GitHub user and viewing their profile,
follower counts, and public repositories.

<br />

[![HTML5](https://img.shields.io/badge/HTML5-markup-e34f26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-styles-1572b6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_modules-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub REST API](https://img.shields.io/badge/GitHub-REST_API-181717?style=for-the-badge&logo=github&logoColor=white)](https://docs.github.com/rest)

</div>

---

## Contents

- [Overview](#overview)
- [Features](#features)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [API notes](#api-notes)

## Overview

GitHub Profile Viewer lets you enter a GitHub username and fetch the matching
public profile using the GitHub REST API. The page shows the user's avatar,
GitHub profile link, follower and following counts, and repository cards.

## Features

- Look up public GitHub profiles by username.
- Show the profile avatar and link to the user's GitHub page.
- Display follower and following counts.
- Browse the repositories returned by GitHub for that user.
- Display a username-not-found or generic error message for profile lookup failures.
- Responsive repository grid and dark-themed interface.

## Built with

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Layout and styling |
| JavaScript (ES modules) | Search, API requests, and rendering |
| [Axios](https://axios-http.com/) | HTTP requests to the GitHub API |
| [Font Awesome](https://fontawesome.com/) | Search icon |
| [GitHub REST API](https://docs.github.com/rest) | Public user and repository data |

Axios and Font Awesome are loaded from CDN links in `index.html`; no package
manager or build step is required.

## Getting started

Because the app uses JavaScript modules, serve the project over HTTP instead of
opening `index.html` directly as a local file.

1. Clone the repository and enter its folder:

   ```bash
   git clone https://github.com/VeyronShark/GitHub-Profile-Viewer.git
   cd GitHub-Profile-Viewer
   ```

2. Start a local static web server. For example, with Python:

   ```bash
   python -m http.server 8000
   ```

   Alternatively, open the project in VS Code and use the Live Server extension.

3. Visit [http://localhost:8000](http://localhost:8000) in your browser.

4. Enter a GitHub username and select **Search**.

## Project structure

```text
.
├── index.html       # App markup and CDN dependencies
├── style.css        # Dark theme and responsive layout
├── script.js        # Search flow and GitHub API requests
├── dataHandler.js   # Search error display helpers
└── display.js       # Profile, follower, and repository rendering
```

## API notes

- The app requests public user data from `api.github.com/users/{username}` and
  the repositories from the profile's `repos_url`.
- No GitHub token is configured or required for public data.
- Unauthenticated GitHub API requests are subject to GitHub's rate limits. If
  the limit is reached, the app may be unable to load data until requests are
  available again.
