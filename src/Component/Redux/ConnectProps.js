import { add, reset, player1, player2, winner } from '../Redux/action'

export const mapStateToProps = (state) => {
    return {
        player1: state.player1,
        player2: state.player2,
        data: state.data,
        winner: state.winner
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => { dispatch(add(data)) },
        resetData: () => { dispatch(reset()) },
        setPlayer1: (data) => { dispatch(player1(data)) },
        setPlayer2: (data) => { dispatch(player2(data)) },
        setWinner: (data) => { dispatch(winner(data)) }
    }
}

