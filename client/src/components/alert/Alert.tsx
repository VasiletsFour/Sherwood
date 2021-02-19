import React, {useEffect, useState} from "react";
import {ModalLayout} from "../../layouts";
import "./Alert.scss";

interface Props {
    title: string;
    text: string;
    btnText?: string;
    okClick?: () => void;
    closeClick: () => void;
}

export const Alert = ({title, text, btnText, closeClick, okClick}: Props) => {
    const [changeColor, setChange] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => setChange(!changeColor), 1200)

        return () => clearInterval(interval)
    }, [changeColor])

    return (
        <ModalLayout>
            <div className="alert">
                <h2 className={`alert__title ${changeColor && "alert__titleLight"}`}>{title}</h2>
                <p className="alert__text">{text}</p>
                <div className="alert__btnContainer">
                    {btnText && okClick && (
                        <button className="alert__btnOk alert__btn" onClick={() => okClick()}>
                            {btnText}
                        </button>
                    )}
                    <button className="alert__btnClose alert__btn" onClick={() => closeClick()}>
                        Закрыть
                    </button>
                </div>
            </div>
        </ModalLayout>
    );
}
