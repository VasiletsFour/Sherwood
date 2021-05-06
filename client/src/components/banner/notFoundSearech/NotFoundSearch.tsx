import React from "react";
import {Jumbotron} from "react-bootstrap";
import "./NotFoundSearch.scss"

interface Props {
    show: boolean
}

export const NotFoundSearch = ({show}: Props) => {
    if (show) {
        return (
            <div className="notFoundSearch">
                <Jumbotron bsPrefix="notFoundSearch__jum">
                    <div className="notFoundSearch__wrapper">
                        <h1 className="notFoundSearch__title">Не найдено</h1>
                        <p className="notFoundSearch__text">По даному запросу нет рузультатов!!</p>
                    </div>
                </Jumbotron>
            </div>
        );
    }

    return null
};
