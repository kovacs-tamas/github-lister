import {REPO_FETCH} from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case REPO_FETCH:

            return {
                error: action.hasOwnProperty('error'),
                status: action.payload.status,
                data: action.payload.data
            };

    }
    return state;
}
