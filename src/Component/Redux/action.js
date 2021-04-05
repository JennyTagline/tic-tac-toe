import { ADD, RESET, SET_PLAYERS, WINNER, MODALS, CURRENT, CLICKED, CLICKED_VALUE } from './Constants'
//with redux
/* export const add = (data) => {
    return {
        type: ADD,
        payload: data
    }
} */

//using redux-thunk
export const add = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD,
            payload: data
        })
    }
}

export const reset = () => {
    return (dispatch) => {
        dispatch({
            type: RESET
        })
    }
}


export const players = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAYERS,
            payload: data
        })
    }
}


export const winner = (data) => {
    return (dispatch) => {
        dispatch({
            type: WINNER,
            payload: data
        })
    }
}
export const modals = (data) => {
    return (dispatch) => {
        dispatch({
            type: MODALS,
            payload: data
        })
    }
}

export const current = (data) => {
    return (dispatch) => {
        dispatch({
            type: CURRENT,
            payload: data
        })
    }
}
export const clicked = (data) => {
    return (dispatch) => {
        dispatch({
            type: CLICKED,
            payload: data
        })
    }
}
export const clickedValue = (data) => {
    return (dispatch) => {
        dispatch({
            type: CLICKED_VALUE,
            payload: data
        })
    }
}