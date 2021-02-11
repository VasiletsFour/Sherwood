import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Blog } from "../../request/BlogApi";
import "./AllNewsImg.scss";

interface Props {
    news: Blog[];
    setActuallyNum: (index: number) => void;
    setActuallyNews: (news: Blog) => void;
}

export const AllNewsImg = ({ news, setActuallyNews, setActuallyNum }: Props) => {
    const [allNews, setAllNews] = useState<Blog[]>([]);
    const [paginationImg, setPaginationImg] = useState({ first: 0, last: 2 });

    const handleArrow = () => {
        const first = paginationImg.first === news.length - 1 ? 0 : paginationImg.first + 1;
        const last = paginationImg.last === news.length - 1 ? 0 : paginationImg.last + 1;
        const newPagination = { first: first, last: last };

        setPaginationImg(newPagination);

        filterArr(paginationImg.last, paginationImg.first);
    };

    const filterArr = (last: number, first: number) => {
        const firstFilter = last < first ? news.length - 1 : last;

        const firstNews = news.filter((item: Blog, index: number) => index >= first && index <= firstFilter);
        const lastNews = first < last ? [] : news.filter((item: Blog, index: number) => index <= last);

        setAllNews(firstNews.concat(lastNews));
    };

    useEffect(() => {
        filterArr(paginationImg.last, paginationImg.first);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginationImg]);

    return (
        <div className="allNewsImg">
            {news.length - 1 > 2 && (
                <FaArrowLeft onClick={() => handleArrow()} className="home__arrowNews home__arrowLeft" />
            )}
            {allNews.map((item: Blog, index: number) => (
                <div key={String(index) + item.id} className="allNewsImg__imgContainer">
                    <div
                        className="allNewsImg__opacity"
                        onClick={() => {
                            setActuallyNum(index);
                            setActuallyNews(item);
                        }}
                    />
                    <div className="allNewsImg__info">
                        <h3>{item.title}</h3>
                    </div>
                    <img src={item.img} alt="img news" />
                </div>
            ))}
            {news.length - 1 > 2 && (
                <FaArrowRight onClick={() => handleArrow()} className="home__arrowNews home__arrowRight" />
            )}
        </div>
    );
};
