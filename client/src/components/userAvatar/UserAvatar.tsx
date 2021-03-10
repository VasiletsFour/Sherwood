import React, {useState} from "react";
import {FaUser} from "react-icons/fa";
import {UploadBtn} from "../";
import "./UserAvatar.scss";

interface Props {
    avatar: string
}

export const UserAvatar = ({avatar}: Props) => {
    const [focusAvatar, setFocusAvatar] = useState(false)
    const [showImg, setShowImg] = useState<null | string>(null)
    const [file, setFile] = useState<File | null>(null)

    console.log(file)

    return (
        <div className="userAvatar"
             onMouseEnter={() => setFocusAvatar(true)}
             onMouseLeave={() => setFocusAvatar(false)}>
            {avatar ?
                <img src={showImg || avatar} className="userAvatar__avatar" alt="user-avatar"/> :
                <FaUser className="userAvatar__icon"/>}
            {focusAvatar && <UploadBtn
                text={"Загрузить Фото"}
                classname={"userAvatar__uploadBtn"}
                setShowImg={(arg: string) => setShowImg(arg)}
                setFile={(arg: File) => setFile(arg)}/>}
        </div>
    );
};
