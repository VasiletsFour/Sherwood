import React from "react";
import {Form} from 'react-bootstrap';
import {NumberInputProps} from "../InputApi";

export const NumberInput = ({...props}: NumberInputProps) => (
    <Form>
        <Form.Control type="number" {...props} />
    </Form>
);
