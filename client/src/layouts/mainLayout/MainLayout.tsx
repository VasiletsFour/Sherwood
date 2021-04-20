import React from "react";
import {Footer, Header} from "../../components";
import "./MainLayout.scss";

interface Props {
    children: JSX.Element;
    title?: string
}

export const MainLayout = ({children, title}: Props) => (
    <div className="mainLayout">
        <Header/>
        <main>
            {title && <div className="mainLayout__pageTitle"><h1>{title}</h1></div>}
            {children}
        </main>
        <Footer/>
    </div>
);
