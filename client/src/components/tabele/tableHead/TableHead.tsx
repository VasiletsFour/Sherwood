import React from "react";
import {ChevronDownUp} from "../../";
import {SortType} from "../teamTable/TeamTable";

interface Props {
    classname?: string;
    rowHead: Array<string>;
    withSort?:boolean
    sortType?: SortType;
    setSortType?: (type: string, kind?: "asc" | "desc", kindBool?: boolean) => void;
}

export const TableHead = ({classname, rowHead, sortType, setSortType}: Props) => (
    <thead>
    <tr className={classname}>
        <th>#</th>
        {rowHead.map((item: string, index: number) => (
            <th
                onClick={() => sortType && setSortType && setSortType(item, sortType.kind, sortType.kindBool)}
                key={index + item + "TableHead"}>
                {item}
                {sortType && (
                    <span>
                            <ChevronDownUp open={sortType.kind === "desc" && sortType?.type === item}/>
                        </span>
                    )}
                </th>
            ))}
        </tr>
    </thead>
);
