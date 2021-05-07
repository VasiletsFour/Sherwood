import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getBlogsListAction} from "../../../store/blog";
import {FormInput, InputDate, SelectTags} from "../../input";
import {TagsMap} from "../../tagsMap/TagsMap";
import {AdminFilterBlock} from "../adminFilterBlock/AdminFilterBlock";

const selectValue = [1, 2, 3]

interface InitialState {
    search?: string
    fromDate?: string
    beforeDate?: string
    tags: Set<string>
}

const initialState: InitialState = {
    search: "",
    tags: new Set(),
    fromDate: "",
    beforeDate: "",
};

interface Props {
    openStatus: boolean
    handleClose: () => void
    withDate?: boolean
    withSelect?: boolean
}

export const AdminFilterArticle = ({openStatus, withDate, handleClose}: Props) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<InitialState>(initialState);
    const maxDate = new Date().toLocaleString("en-CA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })

    const handleInputChange = ({value, name}: { value: string, name: string }) => {
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSelect = () => setState({...state, tags: state.tags})
    const handleAddSelect = (event: ChangeEvent<HTMLSelectElement>) => (state.tags.add(event.target.value) && handleSelect())
    const handleDelSelect = (tag: string) => (state.tags.delete(tag) && handleSelect())

    const handleClear = () => {
        setState({...initialState, tags: new Set<string>()})

        dispatch(getBlogsListAction.trigger())

        return handleClose()
    }
    const handleSearch = () => {
        dispatch(getBlogsListAction.trigger({query: {...state, tags: Array.from(state.tags)}}))

        return handleClose()
    }

    return (
        <AdminFilterBlock openStatus={openStatus} handleClear={() => handleClear()} handleSearch={() => handleSearch()}>
            <div className="adminFilterBlock__container">
                <FormInput
                    onChange={(event) => handleInputChange(event.target)}
                    classname="adminFilterBlock__input"
                    name="search"
                    value={state.search || ""} placeholder={"Поиск по названию"}/>
                {withDate &&
                <div className="adminFilterBlock__dateContainer">
                    <InputDate
                        label={"От"}
                        name={"fromDate"}
                        classname={"adminFilterBlock"}
                        max={state.beforeDate || maxDate}
                        onChange={event => handleInputChange(event.target)}
                        value={state.fromDate || ""}/>
                    <InputDate
                        name="beforeDate"
                        label={"До"}
                        min={state.fromDate || ""}
                        max={maxDate}
                        classname={"adminFilterBlock"}
                        onChange={event => handleInputChange(event.target)}
                        value={state.beforeDate || ""}/>
                </div>}
                <SelectTags handleSelectAdd={(event) => handleAddSelect(event)} option={selectValue}/>
                <TagsMap handleSelectDel={(item: string) => handleDelSelect(item)} tags={state.tags}/>
            </div>
        </AdminFilterBlock>

    );
};
