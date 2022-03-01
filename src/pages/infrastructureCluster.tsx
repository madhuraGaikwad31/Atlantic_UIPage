import React from "react";
import Events from "../components/Events";
import { DataGrid, GridRowType, DataGridFilter, FilterPosition} from "@dellstorage/clarity-react/datagrid"; 
import {DataGridRow, DataGridFilterResult, SortOrder} from "@dellstorage/clarity-react/datagrid";



export const normalColumns = [
    {columnName: "IP"},
    {columnName: "Serial"},
    {columnName: "Model"},
    {columnName: "Template"},
    {columnName: "Networking"},
    {columnName: "Role"},
];

/**
 * Data for Rows
 */
 export const normalRows = [
    {
        rowData: [
            {columnName: "IP", cellData: '192.168.0.1'},
            {columnName: "Serial", cellData: "abc"},
            {columnName: "Model", cellData: "PI-12345672"},
            {columnName: "Template", cellData: "ECS EX400"},
            {columnName: "Networking", cellData: "DHCP"},
            {columnName: "Role", cellData: "Data,Monitor"},
        ],
    },
    {
        rowData: [
            {columnName: "IP", cellData: '192.168.0.1'},
            {columnName: "Serial", cellData: "pqr"},
            {columnName: "Model", cellData: "PI-12345672"},
            {columnName: "Template", cellData: "ECS EX400"},
            {columnName: "Networking", cellData: "DHCP"},
            {columnName: "Role", cellData: "Data,Monitor"},
        ],
    },
    {
        rowData: [
            {columnName: "IP", cellData: '192.168.0.1'},
            {columnName: "Serial", cellData: "xyz"},
            {columnName: "Model", cellData: "PI-12345672"},
            {columnName: "Template", cellData: "ECS EX400"},
            {columnName: "Networking", cellData: "DHCP"},
            {columnName: "Role", cellData: "Data,Monitor"},
        ],
    },
    {
        rowData: [
            {columnName: "IP", cellData: '192.168.0.1'},
            {columnName: "Serial", cellData: "123"},
            {columnName: "Model", cellData: "PI-12345672"},
            {columnName: "Template", cellData: "ECS EX400"},
            {columnName: "Networking", cellData: "DHCP"},
            {columnName: "Role", cellData: "Data,Monitor"},
        ],
    },
    {
        rowData: [
            {columnName: "IP", cellData: '192.168.0.1'},
            {columnName: "Serial", cellData: "xyz"},
            {columnName: "Model", cellData: "PI-12345672"},
            {columnName: "Template", cellData: "ECS EX400"},
            {columnName: "Networking", cellData: "DHCP"},
            {columnName: "Role", cellData: "Data,Monitor"},
        ],
    },
];

const cellData = [
    ['192.168.0.1', "xyz", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"],
    ['192.168.0.1', "abc", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"],
    ['192.168.0.1', "def", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"],
    ['192.168.0.1', "xyz", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"],
    ['192.168.0.1', "123", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"],
    ['192.168.0.1', "123", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"],
    ['192.168.0.1', "klm", "PI-12345672", "ECS EX400", "DHCP", "Data,Monitor"]
];

export function getRowData() {
    let rowValues: DataGridRow[] = [];
    cellData.forEach(function(element: any) {
        const row: DataGridRow = {
            rowData: [
                {
                    columnName: "IP",
                    cellData: element[0],
                },
                {
                    columnName: "Serial",
                    cellData: element[1],
                },
                {
                    columnName: "Model",
                    cellData: element[2],
                },
                {
                    columnName: "Template",
                    cellData: element[3],
                },
                {
                    columnName: "Networking",
                    cellData: element[4],
                },
                {
                    columnName: "Role",
                    cellData: element[5],
                },
            ],
        };

        rowValues.push(row);
    });
    return rowValues;
}

// Data for pagination rows
export const paginationRows = getRowData();


export const getPageData = (pageIndex: number, pageSize: number): Promise<DataGridRow[]> => {
    return new Promise((resolve, reject) => {
        let rows: DataGridRow[] = [];
        if (pageSize === 5) {
            if (pageIndex === 2) {
                rows = paginationRows.slice(5, 10);
            }
            if (pageIndex === 1) {
                rows = paginationRows.slice(0, 5);
            }
        } else if (pageSize === 10) {
            rows = paginationRows;
        }
        // Purposefully added dealy here to see loading spinner
        setTimeout(function() {
            resolve(rows);
        }, 2000);
    });
};


export const paginationDetails = {
    totalItems: paginationRows.length,
    getPageData: getPageData,
    pageSize: 5,
    pageSizes: [5, 10],
};

const InfrastructureCluster = () => {
    return(
        <div style={{width: "80%", padding : "4rem"}}>
            <DataGrid
                columns={normalColumns}
                rows={paginationRows.slice(0, 5)}
                pagination={paginationDetails}
                itemText={"Items"}
                footer={{showFooter: true}}
            />
        </div>

    )
}

export default InfrastructureCluster;