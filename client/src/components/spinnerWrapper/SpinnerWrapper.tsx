import React from "react";
import {Spinner} from "react-bootstrap";
import "./SpinnerWrapper.scss"

interface Props {
    show?: boolean
}

export const SpinnerWrapper = ({show}: Props) => (
    show || show === null ?
        <div className="spinnerWrapper"><Spinner className="spinnerWrapper__spinner" animation="border"
                                                 variant="primary"
                                                 size="sm"/></div> : null
)
