import React from "react";
import {Button} from 'react-bootstrap';
import {FaDownload} from "react-icons/fa";
import {downloadApplicationList} from "../../request/DownloadFileRequest";
import "./ApplicationList.scss";

type listType = "application list" | "additional application list"


export const ApplicationList = () => {
    const handleDownload = (list: listType) => alert(list)

    return (
        <div className="applicationList">
            <Button className="applicationList__btn" variant="primary" onClick={() => downloadApplicationList()}>Заявочный
                лист <FaDownload/></Button>
            <Button className="applicationList__btn" variant="light"
                    onClick={() => handleDownload("additional application list")}>Дозаявочный
                лист <FaDownload/></Button>
        </div>
    );
};