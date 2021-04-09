import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getAdminUserAction} from "../../../store/user";
import {FormInput} from "../../input";
import {AdminFilterBlock} from "../adminFilterBlock/AdminFilterBlock";

interface InitialState {
    search?: string
    sort: "asc" | "desc"
}

const initialState: InitialState = {
    search: "",
    sort: "asc"
};

interface Props {
    openStatus: boolean
    handleClose: () => void
}

export const AdminFilterUser = ({openStatus, handleClose}: Props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<InitialState>(initialState);

    const handleInputChange = ({value, name}: { value: string, name: string }) => {
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleClear = () => {
        setState(initialState)

        dispatch(getAdminUserAction.trigger())

        return handleClose()

    }

    const handleSearch = () => {
        dispatch(getAdminUserAction.trigger({query: state}))

        return handleClose()
    }

    if (openStatus) {
        return (
            <AdminFilterBlock openStatus={openStatus} handleClear={() => handleClear()}
                              handleSearch={() => handleSearch()}>
                <div className="adminFilterBlock__container">
                    <FormInput
                        onChange={(event) => handleInputChange(event.target)}
                        classname="adminFilterBlock__input"
                        name="search"
                        value={state.search || ""} placeholder={"Поиск по названию"}/>
                </div>
            </AdminFilterBlock>
        );
    }

    return null
};