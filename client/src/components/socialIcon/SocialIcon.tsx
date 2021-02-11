import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { INSTAGRAM_URL, locationGo, YOU_TUBE_URL } from "../../utils";
import "./SocialIcon.scss";

export const SocialIcon = () => (
    <div className="socialIcon">
        <FaInstagram className="socialIcon__icon" onClick={() => locationGo(INSTAGRAM_URL.urlTemplate)} />
        <FaYoutube className="socialIcon__icon" onClick={() => locationGo(YOU_TUBE_URL.urlTemplate)} />
    </div>
);
