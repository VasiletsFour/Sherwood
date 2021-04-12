import React, {useState} from "react";
import {Modal} from 'react-bootstrap';
import {FaTimes, FaUser} from "react-icons/fa";
import "./Authorization.scss";
import {SignIn} from "./signIn/SingIn";
import {SignUp} from "./signUp/SignUp";

interface Props {
    isOpen: boolean
    setClose: () => void;
}

export const Authorization = ({setClose, isOpen}: Props) => {
    const [signUp, setSignUp] = useState(false);

    const handleClose = () => (!signUp ? setClose() : setSignUp(false));

        return (
            <Modal show={isOpen} size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered onHide={handleClose}>
                <Modal.Header>
                    <div className="authorization__header">
                        <button className="authorization__headerBtn" onClick={() => handleClose()}>
                            <FaTimes/>
                        </button>
                    </div>
                </Modal.Header>
                <Modal.Body className="authorization">
                    <div className="authorization__main">
                        <div className="authorization__userContainer">
                            <FaUser className="authorization__userContainerIcon"/>
                        </div>
                        {!signUp && <SignIn close={() => handleClose()} signUp={() => setSignUp(!signUp)}/>}
                        {signUp && <SignUp close={() => handleClose()}/>}
                    </div>
                </Modal.Body>
            </Modal>
        );
};
