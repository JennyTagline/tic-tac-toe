import React from 'react'
import Modal from 'react-modal'

const PopupBox = (props) => {
    return (
        <div>

            <Modal isOpen={props.modal} style={{ content: { fontSize: "20px", width: '600px', height: '210px', marginLeft: '550px', marginTop: '250px', backgroundColor: 'lavenderblush', border: '1px solid black' } }}>
                <div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="User1" id="usr" name="username" />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="User2" id="usr" name="username" />
                    </div>
                    <button className="start_btn">Start</button>
                </div>
            </Modal>
        </div>
    )
}

export default PopupBox
