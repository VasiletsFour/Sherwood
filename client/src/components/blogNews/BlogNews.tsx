import React from "react";
import {Blog} from "../../request/BlogApi";
import "./BlogNews.scss";

export const BlogNews = ({ title, tags, text }: Blog) => (
    <div className="blogNews">
        <h1 className="blogNews__title">{title}</h1>
        {tags && <div className="blogNews__tagContainer">
            {tags.map((item: string, index: number) => (
                <span key={item + String(index)}>{item}</span>
            ))}
        </div>}
        <div className="home__blogNewsContainer">
            <p>{text}</p>
        </div>
    </div>
);
