import React from "react"
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

interface Props {
    open: boolean
    classname?: string
}

export const ChevronDownUp = ({open, classname}: Props) => (
    <span className={classname}>{open ? <FaChevronDown/> : <FaChevronUp/>}</span>)