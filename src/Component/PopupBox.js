import React from 'react'
import Modal from 'react-modal'
import Button from './Reusable/Button'
import { useHistory } from 'react-router-dom'

const style = {
    fontSize: "20px",
    width: '600px', height: '200px',
    marginLeft: '630px', marginTop: '250px',
    backgroundColor: 'lavenderblush',
    border: '1px solid black'
}
const btnStyle = { float: "left", marginLeft: "65px" }

export const PlayerBox = (props) => {
    return (
        <div>

            <Modal isOpen={props.modal} style={{
                content: {
                    fontSize: "20px",
                    width: '600px', height: '300px',
                    marginLeft: '630px', marginTop: '250px',
                    backgroundColor: 'lavenderblush',
                    border: '1px solid black'
                }
            }}>
                <div>
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
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Select</span>
                            <select name="boxType" onChange={props.onChange}>
                                <option>Select</option>
                                <option value="3">3*3</option>
                                <option value="4">4*4</option>
                            </select>
                        </div>
                    </div>
                    <Button className="start_btn" onClick={props.onClickStart} text="Start" style={btnStyle} />
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

            <Modal isOpen={props.modal} style={{ content: style }}>
                <div>
                    <p>Are you sure wants to exit?</p>
                    <Button className="start_btn" onClick={() => { props.onClickYes(); history.push("/") }} text="Yes" style={btnStyle} />
                    <Button className="start_btn" text="No" onClick={props.onClick} />
                </div>
            </Modal>
        </div>
    )
}
export const WinnerBox = (props) => {
    return (
        <div>

            <Modal isOpen={props.modal} style={{ content: style }}>
                <div>
                    <p>Winner is : {props.winner}</p>
                    <Button className="start_btn" onClick={props.onClick} text="Play again" style={btnStyle} />
                    <Button className="start_btn" text="Exit" onClick={props.setExit} />
                </div>
            </Modal>
        </div>
    )
}


