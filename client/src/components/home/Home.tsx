import React, {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ActuallyImg, AllNewsImg, BlogNews, EmptyContentBanner} from "../";
import {AppState} from "../../store/store";
import "./Home.scss";

export const Home = () => {
    const {finished, loading, data} = useSelector((state: AppState) => (state?.blogState?.blogs));
    const [actuallyNum, setActuallyNum] = useState(0);

    const handleActually = useCallback(
        (index: number) => {
            const len = data ? data.length : 0;
            const int = actuallyNum + index;
            const newIndex = int === len ? 0 : int < 0 ? len - 1 : int;

            setActuallyNum(newIndex);
        },
        [actuallyNum, data],
    );

    useEffect(() => {
        if (finished && data && data.length > 1) {
            const interval = setInterval(() => handleActually(1), 8000);

            return () => clearInterval(interval);
        }
    }, [handleActually, actuallyNum, finished, data]);

    if (finished && !loading && data && data.length !== 0) {
        return (
            <div className="home">
                <div className="home__blog">
                    <div className="home__blogWrapper">
                        <ActuallyImg
                            blog={data[actuallyNum]}
                            handleActually={(index: number) => handleActually(index)}
                        />
                        <AllNewsImg news={data} setActuallyNum={(index: number) => setActuallyNum(index)}/>
                    </div>
                    <BlogNews
                        id={data[actuallyNum]?.id}
                        title={data[actuallyNum]?.title}
                        tags={data[actuallyNum]?.tags}
                        date={data[actuallyNum]?.date}
                        text={data[actuallyNum]?.text}
                    />
                </div>
            </div>
        );
    }

    return <EmptyContentBanner text="Пока нет команд" show={!!(!loading && finished && data?.length === 0 && data)}/>
};
