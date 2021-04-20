import React from 'react';
import {ApplicationList} from "../../components";
import {MainLayout} from "../../layouts"

export const ApplicationListPage = () => (
    <MainLayout title="Заявочный лист">
        <ApplicationList/>
    </MainLayout>
);