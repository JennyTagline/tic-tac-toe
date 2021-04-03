import React, { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent'
import PopupBox, { ExitBox, WinnerBox } from './PopupBox'
import Button from './Reusable/Button'
import { checkWinner } from './Reusable/CheckWinner'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './Redux/ConnectProps'
const initialState = ["", "", "", "", "", "", "", "", ""]

const style = {
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const MainPage = (props) => {
    const [gameState, setGameState] = useState(initialState)
    const [clicked, setClicked] = useState(false)
    const [clickedValue, setClickedValue] = useState([])
    const [modal, setModal] = useState(true)
    const [exit, setExit] = useState(false)
    const [win, setWin] = useState(false)
    const [user, setUser] = useState({ player1: "", player2: "" })
    const [msg, setMsg] = useState()
    const [current, setCurrent] = useState("X")

    const inputEvent = (e) => {
        const { name, value } = e.target
        setUser((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }
    const { player1, player2 } = user

    const validation = () => {
        if (!player1.length) {
            setMsg("Enter player1.")
        } else if (!player2.length) {
            setMsg("Enter player2.")
        } else if (player1 === player2) {
            setMsg("Give different username.")
        } else {
            setMsg("")
            return true
        }
    }

    const start = () => {
        const data = validation()
        if (data) {
            props.setPlayer1(player1)
            props.setPlayer2(player2)
            setModal(false)
        }
    }

    const squareClick = (index) => {
        let strings = Array.from(gameState)
        const a = clicked ? "X" : "O";
        if (strings[index] === "") {
            strings[index] = a
            props.addData(strings)
            setCurrent(a)
            setClickedValue([...clickedValue, a])
            setGameState(strings)
            setClicked(!clicked)
        }       
    }

    useEffect(() => {
        let strings = Array.from(gameState)
        const winner = checkWinner(strings)
        if (winner) {
            setClickedValue([])
            if (winner === "O") {
                setWin(true)
                props.setWinner(props.player1)
            }
            else {
                setWin(true)
                props.setWinner(props.player2)
            }
        } else {
            if (clickedValue.length === 9) {
                alert("Game Dawn")
                props.setWinner("Game Drawn")
                setClickedValue([])
            }
        }
    }, [gameState])

    const restart = () => {
        setGameState(initialState)
        setCurrent("X")
        setClickedValue([])
        props.addData(initialState)
    }

    const startNewGame = () => {
        props.setWinner("")
        setModal(true)
        setUser({ player1: "", player2: "" })
        setClickedValue([])

    }

    return (
        <div >  <button className="back" onClick={() => { setExit(true) }}><i class="fas fa-arrow-left"></i></button>

            <div className="heading_text"><p >Tic-Tac-Toe</p></div>

            <div style={{ fontSize: "17px", color: "black" }}>
                <p>Player1 : {props.player1}</p>
                <p>Player2 : {props.player2}</p>
                <p>Player  {current === "X" ? props.player1 + "(O)" : props.player2 + "(X)"} turn</p>
            </div>
            <div style={style}>
                {
                    initialState.map((val, i) => (
                        <SquareComponent key={i} state={gameState[i]} onClick={() => squareClick(i)} />
                    ))
                }
            </div>
            {/* <div className="row jc_center ">
                <SquareComponent state={gameState[0]} onClick={() => squareClick(0)} />
                <SquareComponent state={gameState[1]} onClick={() => squareClick(1)} />
                <SquareComponent state={gameState[2]} onClick={() => squareClick(2)} />
            </div>
            <div className="row jc_center ">
                <SquareComponent state={gameState[3]} onClick={() => squareClick(3)} />
                <SquareComponent state={gameState[4]} onClick={() => squareClick(4)} />
                <SquareComponent state={gameState[5]} onClick={() => squareClick(5)} />
            </div>
            <div className="row jc_center ">
                <SquareComponent state={gameState[6]} onClick={() => squareClick(6)} />
                <SquareComponent state={gameState[7]} onClick={() => squareClick(7)} />
                <SquareComponent state={gameState[8]} onClick={() => squareClick(8)} />
            </div> */}
            <div>
                <Button className="clear_button" onClick={restart} text="Restart Game" style={{ float: "left" }} />
                <Button className="new_button" onClick={startNewGame} text="Start New Game" />
            </div>
            <PopupBox onChange={inputEvent} onClickStart={start} onClickCancel={() => { setModal(false) }} modal={modal} msg={msg} />
            <ExitBox modal={exit} onClick={() => { setExit(false); restart() }} />
            <WinnerBox modal={win} onClick={() => { setWin(false); restart() }} winner={props.winner} setExit={() => { setWin(false); setExit(true) }} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
