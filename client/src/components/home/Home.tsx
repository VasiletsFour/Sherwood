import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { ActuallyImg } from "../actuallyImg/ActuallyImg";
import { AllNewsImg } from "../allNewsImg/AllNewsImg";
import { BlogNews } from "../blogNews/BlogNews";
import { Loader } from "../loader/Loader";
import "./Home.scss";

export const Home = () => {
    const { blogs } = useSelector((state: AppState) => ({ blogs: state?.blogState?.blogs }));
    const [actuallyNum, setActuallyNum] = useState(0);

    const handleActually = useCallback(
        (index: number) => {
            const len = blogs.data ? blogs.data.length : 0;
            const int = actuallyNum + index;
            const newIndex = int === len ? 0 : int < 0 ? len - 1 : int;

            setActuallyNum(newIndex);
        },
        [actuallyNum, blogs.data],
    );

    useEffect(() => {
        let mSecond = 8000;
        const interval = setInterval(() => handleActually(1), mSecond);

        return () => clearInterval(interval);
    }, [handleActually, actuallyNum]);

    return (
        <div className="home">
            {blogs.finished && !blogs.loading && blogs.data ? (
                <div className="home__blog">
                    <div className="home__blogWrapper">
                        <ActuallyImg
                            blog={blogs.data[actuallyNum]}
                            handleActually={(index: number) => handleActually(index)}
                        />
                        <AllNewsImg news={blogs.data} setActuallyNum={(index: number) => setActuallyNum(index)} />
                    </div>
                    <BlogNews
                        id={blogs.data[actuallyNum].id}
                        title={blogs.data[actuallyNum].title}
                        tags={blogs.data[actuallyNum].tags}
                        date={blogs.data[actuallyNum].date}
                        text={blogs.data[actuallyNum].text}
                    />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};
