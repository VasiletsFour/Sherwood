import React, {ChangeEvent} from "react";
import {Form} from 'react-bootstrap';
import "./SelectTags.scss";

interface Props {
    option: Array<any>
    handleSelectAdd: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectTags = ({handleSelectAdd, option}: Props) => (
    <Form>
        <Form.Control as={"select"} onChange={(event: ChangeEvent<HTMLSelectElement>) => handleSelectAdd(event)}>
            <option disabled={true} hidden={true}>Выбирете значение</option>
            {option.map((item) => <option key={item?.id + "selectTags"}
                                          value={item?.id}>{item?.name}</option>)}
        </Form.Control>
    </Form>
);
