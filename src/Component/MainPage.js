import React, { useEffect } from 'react'
import SquareComponent from './SquareComponent'
import { PlayerBox, ExitBox, WinnerBox } from './PopupBox'
import Button from './Reusable/Button'
import { checkWinner9, checkWinner16 } from './Reusable/CheckWinner'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './Redux/ConnectProps'
const initialState = ["", "", "", "", "", "", "", "", ""]

const MainPage = (props) => {
    const { data, addData,
        winner, setWinner,
        players, setPlayers,
        modals, setModals,
        current, setCurrent,
        clicked, setClicked,
        clickedValue, setClickedValue
    } = props;
    const { player1, player2, boxType } = players.players
    const { exitBox, playerBox, winnerBox } = modals

    const box = Number(boxType)
    const boxArray = (Array(box * box).fill(""))

    const style = {
        borderRadius: '10px',
        width: '300px',
        height: '300px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: (boxType === "3" ? 'repeat(3, 1fr) / repeat(3, 1fr)' : 'repeat(4, 1fr) / repeat(4, 1fr)'
        )
    };

    useEffect(() => {
        setModals({
            exitBox: false,
            playerBox: true,
            winnerBox: false
        })
        setClicked(false)
    }, [])
    const inputEvent = (e) => {
        setPlayers(
            {
                [e.target.name]: e.target.value
            })
    }

    const validation = () => {
        if (!player1.length) {
            alert("Enter player1.")
        } else if (!player2.length) {
            alert("Enter player2.")
        } else if (player1 === player2) {
            alert("Give different username.")
        } else {
            return true
        }
    }

    const start = () => {
        const data = validation()
        if (data) {
            setModals({
                ...modals,
                playerBox: false,
            })
            addData(boxArray)
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
        /*if (boxArray === "9") {
            winner = checkWinner9(strings)
        }
        else {
            const winner = checkWinner16(strings)
        }*/
        winner = checkWinner9(strings)
        if (winner) {

            if (winner === "O") {
                setModals({
                    ...modals,
                    winnerBox: true,
                })
                setWinner(player1)
            }
            else {
                setModals({
                    ...modals,
                    winnerBox: true,
                })
                setWinner(player2)
            }
        } else {
            if (clickedValue.length === box * box) {
                alert("Game Dawn")
                setWinner("Game Drawn")
                setClickedValue([])
            }
        }
    }, [data])

    const restart = () => {
        setCurrent("X")
        setClickedValue([])
        addData(boxArray)
    }

    const startNewGame = () => {
        setWinner("")
        setModals({
            ...modals,
            playerBox: true,
        })
        setClickedValue([])
    }

    return (
        <div >  <button className="back" onClick={() => {
            setModals({
                ...modals,
                exitBox: true,
            })
        }}><i class="fas fa-arrow-left"></i></button>

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
            <PlayerBox onChange={inputEvent} onClickStart={start}
                onClickCancel={() => { setModals({ ...modals, playerBox: false, }) }}
                modal={playerBox} />

            <ExitBox modal={exitBox} onClickYes={() => { setPlayers({ player1: "", player2: "" }) }}
                onClick={() => { setModals({ ...modals, exitBox: false, }); restart() }} />
            <WinnerBox modal={winnerBox}
                onClick={() => { setModals({ ...modals, winnerBox: false, }); restart() }}
                winner={winner}
                setExit={() => { setModals({ ...modals, winnerBox: false, exitBox: true }) }} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

