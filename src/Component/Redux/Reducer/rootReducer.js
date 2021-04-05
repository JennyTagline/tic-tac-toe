import { ADD, RESET, WINNER, MODALS, CURRENT, CLICKED, CLICKED_VALUE } from '../Constants'

const initialState = {
    data: [],
    winner: "",
    clicked: "",
    current: "",
    clickedValue: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD:
            return {
                ...state,
                data: payload
            }
        case RESET:
            state = {}
            return { ...state }

        case WINNER:
            return {
                ...state,
                winner: payload
            }
        case CURRENT:
            return {
                ...state,
                current: payload
            }
        case CLICKED:
            return {
                ...state,
                clicked: payload
            }
        case CLICKED_VALUE:
            return {
                ...state,
                clickedValue: payload
            }

        default:
            return state;
    }


}
export default rootReducer