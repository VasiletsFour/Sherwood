import React, {useEffect, useState} from "react";
import {ModalLayout} from "../../layouts";
import "./Alert.scss";

interface Props {
    title: string;
    text: string;
    btnText?: string;
    okClick?: () => void;
    closeClick: () => void;
    children?: JSX.Element;
}

export const Alert = ({title, text, btnText, closeClick, okClick, children}: Props) => {
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
                {children && children}
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
