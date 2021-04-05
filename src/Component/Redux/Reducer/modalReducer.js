const initialState = {
    modals: { exitBox: "", winnerBox: "", playerBox: "" },
}

const modalReducer = (state = initialState, { type, payload }) => {
    // console.log('playerReducer :>> ', { ...payload });
    if (type === 'MODALS') {
        return {
            ...state,
            modals: {
                ...state.modals,
                ...payload
            }

        }
    }
    return state
}

export default modalReducer
