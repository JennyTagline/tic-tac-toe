import MainPage from '../MainPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        player1: state.player1,
        player2: state.player2,
        data: state.data,
        winner: state.winner
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addData: (data) => { dispatch({ type: 'ADD', payload: data }) },
        resetData: () => { dispatch({ type: 'RESET' }) },
        setPlayer1: (data) => { dispatch({ type: 'SET_PLAYER1', payload: data }) },
        setPlayer2: (data) => { dispatch({ type: 'SET_PLAYER2', payload: data }) },
        setWinner: (data) => { dispatch({ type: 'WINNER', payload: data }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)