import React, {useEffect, useState} from "react";
import {Jumbotron} from "react-bootstrap";
import {SpinnerWrapper} from "../../spinnerWrapper/SpinnerWrapper";
import "./EmptyContentBanner.scss"

interface Props {
    text: string;
    show: boolean
}

export const EmptyContentBanner = ({text, show}: Props) => {
    const [closeSpinner, setCloseSpinner] = useState(false)

    useEffect(() => {
        !closeSpinner && setTimeout(() => setCloseSpinner(true), 650);
    }, [closeSpinner]);

    if (show && closeSpinner) {
        return (
            <div className="emptyContentBanner">
                <Jumbotron>
                    <div className="emptyContentBanner__wrapper">
                        <h1 className="emptyContentBanner__title">Пустая страница</h1>
                        <p className="emptyContentBanner__text">{text}</p>
                    </div>
                </Jumbotron>
            </div>
        );
    }

    return <SpinnerWrapper/>
};
