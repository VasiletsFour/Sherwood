import React from "react";
import { ConfirmAccount } from "../../components";
import { MainLayout } from "../../layouts";

interface Props {
    location: Location;
}

export const ConfirmAccountPage = ({ location }: Props) => (
    <MainLayout>
        <ConfirmAccount location={location} />
    </MainLayout>
);
