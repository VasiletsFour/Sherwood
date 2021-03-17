import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import "./SwitchBtn.scss"

interface Props {
    status: boolean
    id: string
    onClick: () => void
    label: string
}

export const SwitchBtn = ({status, onClick, label, id}: Props) => {
    const [checked, setChecked] = useState(status)

    const handleChange = () => {
        setChecked(!checked)

        return onClick()
    }

    return (
        <Form>
            <Form.Check
                type="switch"
                id={id}
                label={label} onChange={() => handleChange()} checked={checked}
            />
        </Form>
    )
}



