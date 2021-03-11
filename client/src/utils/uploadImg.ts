import {ChangeEvent} from "react";

export const uploadImg = (event: ChangeEvent<HTMLInputElement>, setImgFile: (file: File) => void, setSrc: (src: string) => void) => {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const img = URL.createObjectURL(file);

    setImgFile(file);
    setSrc(img);
};