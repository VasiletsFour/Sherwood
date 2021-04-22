import React from "react";
import {Spinner} from "react-bootstrap";
import "./SpinnerWrapper.scss"

export const SpinnerWrapper = () => (
    <div className="spinnerWrapper"><Spinner className="spinnerWrapper__spinner" animation="border" variant="primary"
                                             size="sm"/></div>
)
