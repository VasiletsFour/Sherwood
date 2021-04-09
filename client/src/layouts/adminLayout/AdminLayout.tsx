import React, {useEffect, useState} from "react";
import {FaChevronUp} from "react-icons/fa";
import {AdminHeader, AdminSideBar} from "../../components";
import "./AdminLayout.scss";

interface Props {
    children: JSX.Element;
}

export const AdminLayout = ({children}: Props) => {
    const [showArrow, setShowArrow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => handleShow())
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
        <div className="adminLayout">
            <AdminHeader/>
            <main>
                <AdminSideBar/>
                {children}
                {showArrow && <FaChevronUp onClick={() => handleScroll()} className={"adminLayout__icon"}/>}
            </main>
        </div>
    )
};
