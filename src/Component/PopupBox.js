import React from 'react'
import Modal from 'react-modal'
import Button from './Reusable/Button'
import { useHistory } from 'react-router-dom'

export const PlayerBox = (props) => {
    const history = useHistory()
    return (
        <div>

            <Modal isOpen={props.modal} style={{ content: { fontSize: "20px", width: '600px', height: '250px', marginLeft: '550px', marginTop: '250px', backgroundColor: 'lavenderblush', border: '1px solid black' } }}>
                <div>
                    <p style={{ color: "red", fontSize: "20px" }}>{props.msg}</p>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"> O</i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="player1 " name="player1" onChange={props.onChange} />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"> X</i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="player2" name="player2" onChange={props.onChange} />
                    </div>
                    <Button className="start_btn" onClick={props.onClickStart} text="Start" style={{ float: "left", marginLeft: "65px" }} />
                    <Button className="start_btn" onClick={props.onClickCancel} text="Cancel" />
                </div>
            </Modal>
        </div>
    )
}


export const ExitBox = (props) => {
    const history = useHistory()
    return (
        <div>

            <Modal isOpen={props.modal} style={{ content: { fontSize: "20px", width: '600px', height: '150px', marginLeft: '630px', marginTop: '250px', backgroundColor: 'lavenderblush', border: '1px solid black' } }}>
                <div>
                    <p>Are you sure wants to exit?</p>
                    <Button className="start_btn" onClick={() => { history.push("/") }} text="Yes" style={{ float: "left", marginLeft: "65px" }} />
                    <Button className="start_btn" text="No" onClick={props.onClick} />
                </div>
            </Modal>
        </div>
    )
}
export const WinnerBox = (props) => {
    return (
        <div>

            <Modal isOpen={props.modal} style={{ content: { fontSize: "20px", width: '600px', height: '150px', marginLeft: '630px', marginTop: '250px', backgroundColor: 'lavenderblush', border: '1px solid black' } }}>
                <div>
                    <p>Winner is : {props.winner}</p>
                    <Button className="start_btn" onClick={props.onClick} text="Play again" style={{ float: "left", marginLeft: "65px" }} />
                    <Button className="start_btn" text="Exit" onClick={props.setExit} />
                </div>
            </Modal>
        </div>
    )
}


