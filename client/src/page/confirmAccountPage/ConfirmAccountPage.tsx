import React from "react";
import {MainLayout} from "../../layouts"
import {ConfirmAccount} from "../../components";

interface Props {
    location: Location;
}

export const ConfirmAccountPage = ({location}: Props) => (
    <MainLayout>
        <ConfirmAccount location={location}/>
    </MainLayout>
)
