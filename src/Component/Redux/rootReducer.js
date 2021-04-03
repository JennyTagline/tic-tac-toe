import { ADD, RESET, SET_PLAYER1, SET_PLAYER2, WINNER, EXIT_MODAL, WINNER_MODAL, PLAYER_MODAL } from './Constants'
import { WinnerBox } from '../PopupBox'
const initialState = { player1: "", player2: "", winner: "", data: ["", "", "", "", "", "", "", "", ""] };
const modalBox = { exitBox: "", winnerBox: "", playerBox: "" }

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
                player1: action.payload,
            }
        case SET_PLAYER2:
            return {
                ...state,
                player2: action.payload,
            }
        case WINNER:
            return {
                ...state,
                winner: action.payload
            }
        case EXIT_MODAL:
            return {
                ...state,
                exitBox: action.payload
            }
        case WINNER_MODAL:
            return {
                ...state,
                winnerBox: action.payload
            }
        case PLAYER_MODAL:
            return {
                ...state,
                playerBox: action.payload
            }

        default:
            return state;
    }


}
export default rootReducer