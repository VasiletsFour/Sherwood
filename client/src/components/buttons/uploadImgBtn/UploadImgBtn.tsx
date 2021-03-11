import React, {ChangeEvent} from "react";
import "./UploadImgBtn.scss"

interface Props {
    text: string
    classname: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const UploadImgBtn = ({text, classname, ...props}: Props) => (
    <button className={`uploadImgBtn ${classname}`}>
        {text}
        <input
            type="file"
            accept="image/png, image/jpeg"
            className="uploadImgBtn__inputUpload"
            {...props}
        />
    </button>
);


