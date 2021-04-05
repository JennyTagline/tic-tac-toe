const initialState = {
    players: { player1: "", player2: "", boxType: "" }
}

const playerReducer = (state = initialState, { type, payload }) => {
    if (type === 'SET_PLAYERS') {
        return {
            ...state,
            players: {
                ...state.players,
                ...payload
            }
        }
    }
    return state
}

export default playerReducer
