import * as types from '../constants/actionTypes';

function appInit(): object {
    return {
        type: types.APP_INIT,
    };
}

const actions = Object.assign(
    {appInit},
);

export default actions;
