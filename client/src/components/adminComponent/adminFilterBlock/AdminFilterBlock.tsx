import React, {ChangeEvent, useState} from "react";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {BlogQuery} from "../../../request/BlogApi";
import {FormInput, InputDate, SelectTags} from "../../input";
import {TagsMap} from "../../tagsMap/TagsMap";
import "./AdminFilterBlock.scss"

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
    action: {
        trigger: (params: { query: BlogQuery }) => void;
    }
}

export const AdminFilterBlock = ({openStatus, withDate, handleClose, action}: Props) => {
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

        dispatch(action.trigger({query: {...initialState, tags: []}}))
    }
    const handleSearch = () => {
        dispatch(action.trigger({query: {...state, tags: Array.from(state.tags)}}))

        return handleClose()
    }

    if (openStatus) {
        return (
            <div className="adminFilterBlock">
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
                            max={maxDate}
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
                <div className="adminFilterBlock__btnContainer">
                    <Button
                        className="adminFilterBlock__clear"
                        variant='primary'
                        size={"lg"}
                        onClick={() => handleSearch()}>Применить</Button>
                    <Button
                        className="adminFilterBlock__clear"
                        variant='secondary'
                        size={"lg"}
                        onClick={() => handleClear()}>Очистить</Button>
                </div>
            </div>
        );
    }

    return null
};
