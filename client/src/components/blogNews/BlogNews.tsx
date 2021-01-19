import React from "react"
import "./BlogNews.scss"

interface Props {
    title: string
    tag: Array<string>
    text: string
}

export const BlogNews = ({title, tag, text}: Props) => (
    <div className="blogNews">
        <h1 className="blogNews__title">{title}</h1>
        <div className="blogNews__tagContainer">
            {tag.map((item: string, index:number) => <span key={item + String(index)}>{item}</span>)}
        </div>
        <div className="home__blogNewsContainer">
            <p>
                {text}
            </p>
        </div>
    </div>
)

