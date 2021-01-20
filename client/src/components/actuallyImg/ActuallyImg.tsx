import React from "react"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

interface Props {
    title: string
    img: string
    handleActually: (int: number) => void
}

export const ActuallyImg = ({title, img, handleActually}: Props) => (
    <div className="home__blogActualNews">
        <h2>{title}</h2>
        <FaArrowLeft onClick={() => handleActually(-1)}
                     className="home__arrowNews home__arrowLeft"/>
        <img
            src={img}
            alt="img news"/>
        <FaArrowRight onClick={() => handleActually(1)}
                      className="home__arrowNews home__arrowRight"/>
    </div>
)