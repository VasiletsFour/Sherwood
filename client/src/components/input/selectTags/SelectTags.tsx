import React, {ChangeEvent} from "react";
import "./SelectTags.scss";

interface Props {
    handleSelectAdd: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectTags = ({ handleSelectAdd }: Props) => (
    <select name="tags" className="selectTags" onChange={(event) => handleSelectAdd(event)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
);
