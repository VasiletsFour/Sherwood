import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Blog } from "../../request/BlogApi";

interface Props {
    blog: Blog;
    handleActually: (int: number) => void;
}

export const ActuallyImg = ({ blog, handleActually }: Props) => (
    <div className="home__blogActualNews">
        <h2 className="home__blogActualTitle">{blog.title}</h2>
        <FaArrowLeft onClick={() => handleActually(-1)} className="home__arrowNews home__arrowLeft" />
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSud9bFicE5S9XezjnmMTSW7SU5toRQDoaubg&usqp=CAU"
            alt="img news"
        />
        <FaArrowRight onClick={() => handleActually(1)} className="home__arrowNews home__arrowRight" />
    </div>
);
