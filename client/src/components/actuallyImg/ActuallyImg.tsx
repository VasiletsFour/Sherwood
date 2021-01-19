import React from "react"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

interface Props {
    img: string
    handleActually: (int: number) => void
}

export const ActuallyImg = ({img, handleActually}: Props) => (
    <div className="home__blogActualNews">
        <FaArrowLeft onClick={() => handleActually(-1)}
                     className="home__arrowNews home__arrowLeft"/>
        <img
            src={img}
            alt="img news"/>
        <FaArrowRight onClick={() => handleActually(1)}
                      className="home__arrowNews home__arrowRight"/>
    </div>
)