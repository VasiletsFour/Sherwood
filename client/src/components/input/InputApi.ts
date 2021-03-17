import {ChangeEvent} from "react";

interface Props {
    classname: string;
    value: string;
    label?: string;
    placeholder?: string;
    name?: string;
}

export interface InputProps extends Props {
    minLength?: number;
    maxLength?: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps extends Props {
    cols: number;
    rows: number;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface NumberInputProps {
    max: number
    min: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}