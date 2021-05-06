import React, {useEffect, useState} from "react";
import {FaChevronUp} from "react-icons/fa";
import {CSSTransition} from 'react-transition-group';
import "./ScrollArrow.scss";


export const ScrollArrow = () => {
    const [showArrow, setShowArrow] = useState(false)

    useEffect(() => {
        let isMounted = true;

        window.addEventListener("scroll", () => (isMounted && handleShow()))

        return function cleanUp() {
            isMounted = false
        }
    }, [])

    const handleShow = () => {
        if (document.documentElement.scrollTop > 0) {
            return setShowArrow(true)
        }

        return setShowArrow(false)
    }

    const handleScroll = () => {
        const top = document.getElementById("top")

        return top && top.scrollIntoView({behavior: "smooth"})
    }

    return (
        <CSSTransition unmountOnExit in={showArrow} timeout={190}><FaChevronUp onClick={() => handleScroll()}
                                                                               className="scrollArrow"/>
        </CSSTransition>
    )
};
