import React from "react";
import {Button} from "react-bootstrap";
import "./AdminFilterBlock.scss"

interface Props {
    handleSearch: () => void
    handleClear: () => void
    openStatus: boolean
    children: JSX.Element
}

export const AdminFilterBlock = ({openStatus, children, handleClear, handleSearch}: Props) => {
    if (openStatus) {
        return (
            <div className="adminFilterBlock">
                <div className="adminFilterBlock__children">
                    {children}
                </div>
                <div className="adminFilterBlock__btnContainer">
                    <Button
                        className="adminFilterBlock__clear"
                        variant='primary'
                        size={"lg"}
                        onClick={() => handleSearch()}>Применить</Button>
                    <Button
                        className="adminFilterBlock__clear"
                        variant='secondary'
                        size={"lg"}
                        onClick={() => handleClear()}>Очистить</Button>
                </div>
            </div>
        );
    }

    return null
};
