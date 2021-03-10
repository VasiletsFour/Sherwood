import React, {ChangeEvent} from "react";

interface Props {
    text: string
    classname: string
    setShowImg: (src: string) => void;
    setFile: (file: File) => void
}


export const UploadBtn = ({text, classname, setFile, setShowImg}: Props) => {
    const handleImg = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const file = (target.files as FileList)[0];
        const img = URL.createObjectURL(file);

        setFile(file);
        setShowImg(img);
    };

    return (
        <button className={`uploadBtn ${classname}`}>
            {text}
            <input
                type="file"
                accept="image/png, image/jpeg"
                className="uploadBtn__inputUpload"
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleImg(event)}
            />
        </button>

    );
};
