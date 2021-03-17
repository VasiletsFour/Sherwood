import React, {useState} from "react";
import {FaTimes, FaUser} from "react-icons/fa";
import {ModalLayout} from "../../layouts";
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

    if (isOpen) {
        return (
            <ModalLayout>
                <div className="authorization">
                    <div className="authorization__header">
                        <button className="authorization__headerBtn" onClick={() => handleClose()}>
                            <FaTimes/>
                        </button>
                    </div>
                    <div className="authorization__main">
                        <div className="authorization__userContainer">
                            <FaUser/>
                        </div>
                        {!signUp && <SignIn close={() => handleClose()} signUp={() => setSignUp(!signUp)}/>}
                        {signUp && <SignUp close={() => handleClose()}/>}
                    </div>
                </div>
            </ModalLayout>
        );
    }

    return null
};
