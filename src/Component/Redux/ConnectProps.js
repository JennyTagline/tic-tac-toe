import { add, reset, winner, modals, current, clicked, clickedValue, players } from '../Redux/action'

export const mapStateToProps = (state) => {
    return {
        players: state.playerReducer,
        data: state.rootReducer.data,
        winner: state.rootReducer.winner,
        modals: state.modalReducer.modals,
        current: state.rootReducer.current,
        clickedValue: state.rootReducer.clickedValue,
        clicked: state.rootReducer.clicked,
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => { dispatch(add(data)) },
        resetData: () => { dispatch(reset()) },
        setPlayers: (data) => { dispatch(players(data)) },
        setWinner: (data) => { dispatch(winner(data)) },
        setModals: (data) => { dispatch(modals(data)) },
        setCurrent: (data) => { dispatch(current(data)) },
        setClicked: (data) => { dispatch(clicked(data)) },
        setClickedValue: (data) => { dispatch(clickedValue(data)) },

    }
}

