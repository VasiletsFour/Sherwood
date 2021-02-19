import React from "react";
import "./Loader.scss";

interface Props {
    color?: "white";
}

export const Loader = ({ color }: Props) => <div className={color ? "loaderWhiteBack" : "loader"}>Loading...</div>;
