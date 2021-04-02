import { ADD, RESET, SET_PLAYER1, SET_PLAYER2, WINNER } from './Constants'
const initialState = { player1: "", player2: "", winner: "", data: ["", "", "", "", "", "", "", "", ""] };

const rootReducer = (state = initialState, action) => {
    //  console.log('action :>> ', action);
    switch (action.type) {
        case ADD:
            return {
                ...state,
                data: action.payload
            }
        case RESET:
            state = initialState
            return { ...state }
        case SET_PLAYER1:
            return {
                ...state,
                player1: action.payload
            }
        case SET_PLAYER2:
            return {
                ...state,
                player2: action.payload
            }
        case WINNER:
            return {
                ...state,
                winner: action.payload
            }
        default:
            return state;
    }


}
export default rootReducer