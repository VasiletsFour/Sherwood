import {ChangeEvent} from "react"

export interface InputProps {
    classname: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    label: string
    placeholder: string
    name?: string
    minLength?: number
    maxLength?: number
}