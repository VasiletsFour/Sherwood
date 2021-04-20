import React from "react";
import {Tournament} from "../../components";
import {MainLayout} from "../../layouts";

export const TournamentTablePage = () => (
    <MainLayout title="Турнирная таблица">
        <Tournament/>
    </MainLayout>
);
