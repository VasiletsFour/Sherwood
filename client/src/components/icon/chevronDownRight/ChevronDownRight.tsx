import React from "react";
import {FaChevronDown, FaChevronRight} from "react-icons/fa";

interface Props {
    open: boolean;
    classname?: string;
}

export const ChevronDownRight = ({ open, classname }: Props) => (
    <span className={classname}>{open ? <FaChevronDown /> : <FaChevronRight />}</span>
);
