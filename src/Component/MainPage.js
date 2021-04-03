import React, { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent'
import { PlayerBox, ExitBox, WinnerBox } from './PopupBox'
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
    console.log('props.winnerBox :>> ', props.winnerBox);
    const { data, player1, player2, winner, addData, setPlayer1, setPlayer2, setWinner, setExitBox, setWinnerBox, setPlayerBox, exitBox, winnerBox, playerBox } = props;
    const [clicked, setClicked] = useState(false)
    const [clickedValue, setClickedValue] = useState([])
    const [msg, setMsg] = useState()
    const [current, setCurrent] = useState("X")
    

    useEffect(() => {
        setExitBox(false)
        setPlayerBox(true)
        setWinnerBox(false)
    }, [])

    const inputEvent = (e) => {
        (e.target.name === "player1" ? setPlayer1(e.target.value) : setPlayer2(e.target.value))  
    }

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
            setPlayerBox(false)
        }
    }

    const squareClick = (index) => {
        let strings = Array.from(data)
        const a = clicked ? "X" : "O";
        if (strings[index] === "") {
            strings[index] = a
            addData(strings)
            setCurrent(a)
            setClickedValue([...clickedValue, a])
            setClicked(!clicked)
        }
    }

    useEffect(() => {
        let strings = Array.from(data)
        const winner = checkWinner(strings)
        if (winner) {
            setClickedValue([])
            if (winner === "O") {
                setWinnerBox(true)
                setWinner(player1)
            }
            else {
                setWinnerBox(true)
                setWinner(player2)
            }
        } else {
            if (clickedValue.length === 9) {
                alert("Game Dawn")
                setWinner("Game Drawn")
                setClickedValue([])
            }
        }
    }, [data])

    const restart = () => {
        setCurrent("X")
        setClickedValue([])
        addData(initialState)
    }

    const startNewGame = () => {
        setWinner("")
        setPlayerBox(true)
        setClickedValue([])

    }

    return (
        <div >  <button className="back" onClick={() => { setExitBox(true) }}><i class="fas fa-arrow-left"></i></button>

            <div className="heading_text"><p >Tic-Tac-Toe</p></div>

            <div style={{ fontSize: "17px", color: "black" }}>
                <p>Player1 : {player1}</p>
                <p>Player2 : {player2}</p>
                <p>Player  {current === "X" ? player1 + "(O)" : player2 + "(X)"} turn</p>
            </div>
            <div style={style}>
                {
                    data.map((val, i) => (
                        <SquareComponent key={i} state={data[i]} onClick={() => squareClick(i)} />
                    ))
                }
            </div>           
            <div>
                <Button className="clear_button" onClick={restart} text="Restart Game" style={{ float: "left" }} />
                <Button className="new_button" onClick={startNewGame} text="Start New Game" />
            </div>
            <PlayerBox onChange={inputEvent} onClickStart={start} onClickCancel={() => { setPlayerBox(false) }} modal={playerBox} msg={msg} />
            <ExitBox modal={exitBox} onClick={() => { setExitBox(false); restart() }} />
            <WinnerBox modal={winnerBox} onClick={() => { setWinnerBox(false); restart() }} winner={winner} setExit={() => { setWinnerBox(false); setExitBox(true) }} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

