import React, {useState} from "react"
import {ModalLayout} from "../../layouts"
import {SignIn} from "./signIn/SingIn";
import {SignUp} from "./signUp/SignUp";
import {FaTimes, FaUser} from 'react-icons/fa';
import "./Authorization.scss"

interface Props {
    setClose: () => void
}

export const Authorization = ({setClose}: Props) => {
    const [signUp, setSignUp] = useState(false)

    const handleClose = () => !signUp ? setClose() : setSignUp(false)

    return (
        <ModalLayout>
            <div className="authorization">
                <div className="authorization__header">
                    <button className="authorization__headerBtn" onClick={()=>handleClose()}><FaTimes/></button>
                </div>
                <div className="authorization__main">
                    <div className="authorization__userContainer"><FaUser/></div>
                    {!signUp && <SignIn signUp={() => setSignUp(!signUp)}/>}
                    {signUp && <SignUp/>}
                </div>
            </div>
        </ModalLayout>
    )
}