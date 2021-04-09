import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getAdminPlayerListAction} from "../../../store/player";
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

export const AdminFilterTeam = ({openStatus, handleClose}: Props) => {
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

        dispatch(getAdminPlayerListAction.trigger())

        return handleClose()
    }

    const handleSearch = () => {
        dispatch(getAdminPlayerListAction.trigger({query: state}))

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