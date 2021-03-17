import React, {useEffect, useState} from "react";
import "./InformationBanner.scss";

interface Props {
    title?: string;
    error?: boolean;
    text: string;
    btnText: string;
    click: () => void;
}

export const InformationBanner = ({ title, error, text, btnText, click }: Props) => {
    const [errorInfo, setErrorInfo] = useState(true);

    useEffect(() => {
        error &&
            setTimeout(() => {
                setErrorInfo(!errorInfo);
            }, 800);
    }, [error, errorInfo]);

    return (
        // <ModalLayout>
            <div className="informationBanner">
                {title && <h1 className="informationBanner__title">{title}</h1>}
                {error && (
                    <h1 className={errorInfo ? "informationBanner__error" : "informationBanner__title"}>Ошибка</h1>
                )}
                <p className="informationBanner__text">{text}</p>
                <button className="informationBanner__btn" onClick={() => click()}>{btnText}</button>
            </div>
        // </ModalLayout>
    );
};
