import React, {useEffect, useState} from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {Blog} from "../../request/BlogApi";
import "./AllNewsImg.scss";

interface Props {
    news: Blog[];
    setActuallyNum: (index: number) => void;
}

export const AllNewsImg = ({news, setActuallyNum}: Props) => {
    const [allNews, setAllNews] = useState<Blog[]>([]);
    const [paginationImg, setPaginationImg] = useState({first: 0, last: 2});
    const showArrow = news.length - 1 > 2

    const handleArrow = () => {
        const first = paginationImg.first === news.length - 1 ? 0 : paginationImg.first + 1;
        const last = paginationImg.last === news.length - 1 ? 0 : paginationImg.last + 1;
        const newPagination = {first: first, last: last};

        setPaginationImg(newPagination);

        filterArr(paginationImg.last, paginationImg.first);
    };

    const filterArr = (last: number, first: number) => {
        const firstFilter = last < first ? news.length - 1 : last;

        const firstNews = news.filter((item: Blog, index: number) => index >= first && index <= firstFilter);
        const lastNews = first < last ? [] : news.filter((item: Blog, index: number) => index <= last);

        setAllNews(firstNews.concat(lastNews));
    };

    const handleClick = (id: number) => {
        const index = news.findIndex((elem) => elem.id === id)

        setActuallyNum(index)
    }

    useEffect(() => {
        filterArr(paginationImg.last, paginationImg.first);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginationImg]);

    return (
        <div className="allNewsImg">
            {showArrow && <FaArrowLeft onClick={() => handleArrow()} className="home__arrowNews home__arrowLeft"/>}
            {allNews.map((item: Blog, index: number) => (
                <div key={String(index) + item.id} className="allNewsImg__imgContainer">
                    <div
                        className="allNewsImg__opacity"
                        onClick={() => handleClick(item.id)}
                    />
                    <div className="allNewsImg__info">
                        <h3>{item.title}</h3>
                    </div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSud9bFicE5S9XezjnmMTSW7SU5toRQDoaubg&usqp=CAU"
                        alt="img news"
                    />
                </div>
            ))}
            {showArrow && <FaArrowRight onClick={() => handleArrow()} className="home__arrowNews home__arrowRight"/>}
        </div>
    );
};
