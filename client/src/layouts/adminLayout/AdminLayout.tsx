import React from "react";
import {AdminHeader, AdminSideBar, ScrollArrow} from "../../components";
import "./AdminLayout.scss";

interface Props {
    children: JSX.Element;
}

export const AdminLayout = ({children}: Props) => (
    <div className="adminLayout">
        <AdminHeader/>
        <main>
            <AdminSideBar/>
            {children}
            <ScrollArrow/>
        </main>
    </div>
)


