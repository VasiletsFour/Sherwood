import * as React from "react";
import { FaCogs } from "react-icons/fa";
import "./TechnicalWork.scss";

export const TechnicalWork = () => (
    <div className="technicalWork">
        <FaCogs className="technicalWork__icon" />
        <h1 className="technicalWork__title">Sorry, the site is temporarily unavailable, technical work is underway</h1>
    </div>
);
