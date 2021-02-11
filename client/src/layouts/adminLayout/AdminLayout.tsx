import React from "react";
import { AdminHeader, AdminSideBar } from "../../components";
import "./AdminLayout.scss";

interface Props {
    children: JSX.Element;
}

export const AdminLayout = ({ children }: Props) => (
    <div className="adminLayout">
        <AdminHeader />
        <main>
            <AdminSideBar />
            {children}
        </main>
    </div>
);
