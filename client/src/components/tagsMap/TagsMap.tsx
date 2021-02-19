import React from "react";
import { FaTimes } from "react-icons/fa";
import "./TagsMap.scss";

interface Props {
    handleSelectDel: (arg: string) => void;
    tags: Set<string>;
}

export const TagsMap = ({ handleSelectDel, tags }: Props) => (
    <div className="tagsMap">
        {Array.from(tags).map((item: string, index: number) => (
            <div key={index + item} className="tagsMap__selectItem">
                <p> {item}</p>
                <FaTimes onClick={() => handleSelectDel(item)} />
            </div>
        ))}
    </div>
);
