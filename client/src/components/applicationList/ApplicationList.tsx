import React from "react";
import {Button} from 'react-bootstrap';
import {FaDownload} from "react-icons/fa";
import {downloadApplicationList} from "../../request/DownloadFileRequest";
import "./ApplicationList.scss";

export const ApplicationList = () => (
    <div className="applicationList">
        <Button className="applicationList__btn" variant="primary" onClick={() => downloadApplicationList()}>Заявочный
            лист <FaDownload/></Button>
        <Button className="applicationList__btn" variant="light"
                onClick={() => downloadApplicationList()}>Дозаявочный
            лист <FaDownload/></Button>
    </div>
);
