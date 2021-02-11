import React from "react";
import { ModalLayout } from "../../layouts";
import "./Alert.scss";

interface Props {
    title: string;
    text: string;
    btnText?: string;
    okClick?: () => void;
    closeClick: () => void;
}

export const Alert = ({ title, text, btnText, closeClick, okClick }: Props) => (
    <ModalLayout>
        <div className="alert">
            <h2 className="alert__title">{title}</h2>
            <p className="alert__text">{text}</p>
            <div className="alert__btnContainer">
                {btnText && okClick && (
                    <button className="alert__btnOk" onClick={() => okClick()}>
                        {btnText}
                    </button>
                )}
                <button className="alert__btnClose" onClick={() => closeClick()}>
                    Закрыть
                </button>
            </div>
        </div>
    </ModalLayout>
);
