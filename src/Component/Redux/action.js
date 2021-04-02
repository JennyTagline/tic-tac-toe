import { ADD, RESET, SET_PLAYER1, SET_PLAYER2, WINNER } from './Constants'
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