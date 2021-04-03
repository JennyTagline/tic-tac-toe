import { ADD, RESET, SET_PLAYER1, SET_PLAYER2, WINNER, EXIT_MODAL, WINNER_MODAL, PLAYER_MODAL } from './Constants'
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

export const player1 = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAYER1,
            payload: data
        })
    }
}

export const player2 = (data) => {
    return (dispatch) => {
        dispatch({
            type: SET_PLAYER2,
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
export const playerBox = (data) => {
    return (dispatch) => {
        dispatch({
            type: PLAYER_MODAL,
            payload: data
        })
    }
}
export const winnerBox = (data) => {
    return (dispatch) => {
        dispatch({
            type: WINNER_MODAL,
            payload: data
        })
    }
}
export const exitBox = (data) => {
    return (dispatch) => {
        dispatch({
            type: EXIT_MODAL,
            payload: data
        })
    }
}