import React from "react"
import {Blog} from "../../request/BlogApi"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

interface Props {
    blog: Blog
    handleActually: (int: number) => void
}

export const ActuallyImg = ({blog, handleActually}: Props) => (
    <div className="home__blogActualNews">
        <h2>{blog.title}</h2>
        <FaArrowLeft onClick={() => handleActually(-1)}
                     className="home__arrowNews home__arrowLeft"/>
        <img
            src={blog.img}
            alt="img news"/>
        <FaArrowRight onClick={() => handleActually(1)}
                      className="home__arrowNews home__arrowRight"/>
    </div>
)