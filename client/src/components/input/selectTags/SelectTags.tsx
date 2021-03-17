import React, {ChangeEvent} from "react";
import {Form} from 'react-bootstrap';
import "./SelectTags.scss";

interface Props {
    handleSelectAdd: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectTags = ({ handleSelectAdd }: Props) => (
    <Form>
        <Form.Control as={"select"} onChange={(event: ChangeEvent<HTMLSelectElement>) => handleSelectAdd(event)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </Form.Control>
    </Form>
);
