import axios from 'axios';

const GITHUB_URL = `https://api.github.com/users`;

export const REPO_FETCH = 'REPO_FETCH';

export function fetchRepos(user) {

    const url = `${GITHUB_URL}/${user}/repos`;
    const request = axios.get(url);

    return {
        type: REPO_FETCH,
        payload: request
    };
}
