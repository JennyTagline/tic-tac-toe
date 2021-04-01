import React from 'react'
import Button from './Reusable/Button'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()
    return (
        <div>
            <div className="heading"><p >Tic-Tac-Toe</p><br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" width="400px" alt="" />
                <Button text="Start Game" className="start_game" onClick={() => { history.push("./mainPage") }} />
            </div>
        </div>
    )
}

export default HomePage
