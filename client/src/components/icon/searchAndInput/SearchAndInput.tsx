import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchAndInput.scss"

export const SearchAndInput = () => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <div className="searchAndInput">
            {openSearch && <input className="searchAndInput__inputSearch" type="text"/>}
            <FaSearch className="searchAndInput__icon" onClick={() => setOpenSearch(!openSearch)}/>
        </div>

    );
};
