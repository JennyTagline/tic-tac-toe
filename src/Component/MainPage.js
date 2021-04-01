import React, { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent'
import PopupBox from './PopupBox'
import Button from './Reusable/Button'

const initialState = ["", "", "", "", "", "", "", "", ""]
const MainPage = () => {
    const [gameState, setGameState] = useState(initialState)
    console.log('gameState :>> ', gameState);
    const [clicked, setClicked] = useState(false)
    const [modal, setModal] = useState(true)
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
            setModal(false)
        }
    }

    const squareClick = (index) => {
        let strings = Array.from(gameState)
        const a = clicked ? "X" : "O";
        if (strings[index] === "") {
            strings[index] = a
            setCurrent(a)
            setGameState(strings)
            setClicked(!clicked)
        }       
    }

    useEffect(() => {
        let strings = Array.from(gameState)

        const abc = strings.map((val, i) => {
            // console.log('val :>> ', strings[i], val);
        })
        const winner = checkWinner()
        //console.log('winner :>> ', winner);
        if (winner) {
            if (winner === "O") {
                alert(`Congratulations ${player1}. You won the game.`)
                restart()
            }
            else {
                alert(`Congratulations ${player2}. You won the game.`)
                restart()
            }
        } else {
            console.log(`no`);
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            } 
        }
        return null;

    }

    const restart = () => {
        setGameState(initialState)
        setCurrent("X")
    }

    return (
        <div >
            <div className="heading_text"><p >Tic-Tac-Toe</p></div>
            <div style={{ fontSize: "17px", color: "black" }}>
                <p>Player1 : {player1}</p>
                <p>Player2 : {player2}</p>
                <p>Player  {current == "X" ? player1 + "(O)" : player2 + "(X)"} turn</p>
            </div>
            <div className="row jc_center ">
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
            </div>
            <div>
                <Button className="clear_button" onClick={restart} text="Restart Game" style={{ float: "left" }} />
                <Button className="new_button" onClick={() => { setModal(true); setUser({ player1: "", player2: "" }) }} text="Start New Game" />
            </div>
            <PopupBox onChange={inputEvent} onClick={start} modal={modal} msg={msg} />
        </div>
    )
}

export default MainPage
