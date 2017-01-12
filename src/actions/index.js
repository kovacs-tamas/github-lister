import axios from 'axios';

const GITHUB_URL = `https://api.github.com/users`;

export const REPO_FETCH = 'REPO_FETCH';

export function fetchRepos(user) {

    const request = axios.get(`${GITHUB_URL}/${user}/repos`);

    return {
        type: REPO_FETCH,
        payload: request
    };
}
