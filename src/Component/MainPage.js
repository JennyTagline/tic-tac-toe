import React, { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent'
import Modal from 'react-modal'
//import PopupBox from './PopupBox'

const initialState = ["", "", "", "", "", "", "", "", ""]
const MainPage = () => {
    const [gameState, setGameState] = useState(initialState)
    console.log('gameState :>> ', gameState);
    const [clicked, setClicked] = useState(false)
    console.log('clicked :>> ', clicked);
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState({ user1: "", user2: "" })
    const [msg, setMsg] = useState()

    useEffect(() => {
        setModal(true)
    }, [])

    const inputEvent = (e) => {
        const { name, value } = e.target
        setUser((pre) => {
            return {
                ...pre, [name]: value
            }
        })
    }
    const { user1, user2 } = user
    console.log('user :>> ', user);

    const validation = () => {
        if (!user1.length) {
            setMsg("Enter user1.")
        } else if (!user2.length) {
            setMsg("Enter user2.")
        } else {
            setMsg("")
            return true
        }
    }

    const start = (e) => {
        const data = validation()
        if (data) {
            setModal(false)
        }
    }

    const squareClick = (index) => {
        console.log('index :>> ', index);
        let strings = Array.from(gameState)
        strings[index] = clicked ? "X" : "O";
        setGameState(strings)
        setClicked(!clicked)
    }





    useEffect(() => {
        const winner = checkWinner()
        console.log('winner :>> ', winner);
        if (winner) {
            if (winner === "X") {
                alert(`Congratulations ${user1}. You won the game.`)
                restart()
            }
            else {
                alert(`Congratulations ${user2}. You won the game.`)
                restart()
            }
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                console.log('object :>> ', gameState[b]);
                return gameState[a];
            }
        }
        return null;
    }

    const restart = () => {
        setGameState(initialState)
    }

    return (
        <div >
            <div className="heading_text"><p >Tic-Tac-Toe</p></div>
            <div>

            </div>
            <div className="row jc_center ">
                <SquareComponent className="border_right_bottom" state={gameState[0]} onClick={() => squareClick(0)} />
                <SquareComponent className="border_right_bottom" state={gameState[1]} onClick={() => squareClick(1)} />
                <SquareComponent className="border_bottom" state={gameState[2]} onClick={() => squareClick(2)} />
            </div>
            <div className="row jc_center ">
                <SquareComponent className="border_right_bottom" state={gameState[3]} onClick={() => squareClick(3)} />
                <SquareComponent className="border_right_bottom" state={gameState[4]} onClick={() => squareClick(4)} />
                <SquareComponent className="border_bottom" state={gameState[5]} onClick={() => squareClick(5)} />
            </div>
            <div className="row jc_center ">
                <SquareComponent className="border_right" state={gameState[6]} onClick={() => squareClick(6)} />
                <SquareComponent className="border_right" state={gameState[7]} onClick={() => squareClick(7)} />
                <SquareComponent state={gameState[8]} onClick={() => squareClick(8)} />
            </div>
            <button className="clear_button" onClick={restart}>Restart Game</button>


            <Modal isOpen={modal} style={{ content: { fontSize: "20px", width: '600px', height: '250px', marginLeft: '550px', marginTop: '250px', backgroundColor: 'lavenderblush', border: '1px solid black' } }}>
                <div>
                    <p style={{ color: "red", fontSize: "20px" }}>{msg}</p>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"> X</i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="User1 " name="user1" onChange={inputEvent} />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"> O</i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="User2" name="user2" onChange={inputEvent} />
                    </div>
                    <button className="start_btn" onClick={start}>Start</button>
                </div>
            </Modal>
        </div>
    )
}

export default MainPage
