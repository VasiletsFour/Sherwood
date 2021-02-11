import React from "react";
import { ChevronDownUp } from "../../icon/chevronDownUp/CgevronDownUp";
import { SortType } from "../teamTable/TeamTable";

interface Props {
    classname: string;
    rowHead: Array<string>;
    sortType?: SortType;
    setSortType?: (type: string, kind: "asc" | "desc", kindBool: boolean) => void;
}

export const TableHead = ({ classname, rowHead, sortType, setSortType }: Props) => (
    <thead>
        <tr className={classname}>
            {rowHead.map((item: string, index: number) => (
                <th
                    onClick={() => sortType && setSortType && setSortType(item, sortType.kind, sortType.kindBool)}
                    key={index + item + "TableHead"}>
                    {item}
                    {sortType && (
                        <span>
                            <ChevronDownUp open={sortType.kindBool && sortType?.type === item} />
                        </span>
                    )}
                </th>
            ))}
        </tr>
    </thead>
);
