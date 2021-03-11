import React, {ChangeEvent, useState} from "react";
import {FaUser} from "react-icons/fa";
import {UploadImgBtn} from "../";
import {uploadImg} from "../../utils";
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
            {focusAvatar && <UploadImgBtn
                text="Загрузить Фото"
                classname="userAvatar__uploadBtn"
                onChange={(event: ChangeEvent<HTMLInputElement>) => uploadImg(event, (file: File) => setFile(file), (src: string) => setShowImg(src))}/>}
        </div>
    );
};
