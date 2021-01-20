import React, {useEffect, useState} from "react"
import "./AllNewsImg.scss"
import {Blog} from "../../request/BlogApi"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

interface Props {
    news: Blog[]
    actuallyNews: (index: number) => void
}

export const AllNewsImg = ({news, actuallyNews}: Props) => {
    const [allNews, setAllNews] = useState<Blog[]>([])
    const [paginationImg, setPaginationImg] = useState({first: 0, last: 2})

    const handleArrow = () => {
        const first = paginationImg.first === news.length - 1 ? 0 : paginationImg.first + 1
        const last = paginationImg.last === news.length - 1 ? 0 : paginationImg.last + 1
        const newPagination = {first: first, last: last}

        setPaginationImg(newPagination)

        filterArr(paginationImg.last, paginationImg.first)
    }

    const filterArr = (last: number, first: number) => {
        const firstFilter = last < first ? news.length - 1 : last

        const firstNews = news.filter((item: Blog, index: number) => index >= first && index <= firstFilter)
        const lastNews = first < last ? [] : news.filter((item: Blog, index: number) => index <= last)

        setAllNews(firstNews.concat(lastNews))
    }

    useEffect(() => {
        filterArr(paginationImg.last, paginationImg.first)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginationImg])

    return (
        <div className="allNewsImg">
            {news.length - 1 > 2 && <FaArrowLeft
                onClick={() => handleArrow(1)}
                className="home__arrowNews home__arrowLeft"/>}
            {allNews.map((item: Blog, index: number) => <img key={String(index) + item.id} src={item.img} alt="img news"
                                                             onClick={() => actuallyNews(index)}/>)}
            {news.length - 1 > 2 && <FaArrowRight

                onClick={() => handleArrow()}
                className="home__arrowNews home__arrowRight"/>}
        </div>
    )
}