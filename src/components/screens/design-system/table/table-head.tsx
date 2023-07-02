import { FC, useState,  useEffect } from "react"

const TableHead: FC = () => {

    return (
        <thead className="text-base-content dark:text-base-content-dark">
        <tr>
            <th className="flex items-center gap-2 normal-case">
                ClassName
            </th>
            <th className="normal-case">Type</th>
            <th></th>
        </tr>
        </thead>)
}
export default TableHead
