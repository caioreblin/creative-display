import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem } from "@mui/material";
// import { updateRow } from "../../services/api";

interface EditableTableProps {
    data: any[];
}

const EditableTable: React.FC<EditableTableProps> = ({ data }) => {
    const [tableData, setTableData] = useState(data);

    const editableColumns = [
        'Coluna 4'
    ]

    const handleChange = (value: string, rowIndex: number, field: string) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][field] = value;
        setTableData(updatedData);
        // updateRow(updatedData[rowIndex]).catch((err) => console.error(err));
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((key) => (
                            <TableCell key={key}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {Object.entries(row).map(([field, value], colIndex) => (
                                <TableCell key={colIndex}>
                                    {editableColumns.includes(field) ? (
                                        <Select
                                            value={value as string}
                                            onChange={(e) => handleChange(e.target.value, rowIndex, field)}
                                        >
                                            <MenuItem value="Linha 1">Opção 1</MenuItem>
                                            <MenuItem value="Linha 2">Opção 2</MenuItem>
                                            <MenuItem value="Linha 3">Opção 3</MenuItem>
                                            <MenuItem value="Linha 4">Opção 4</MenuItem>
                                        </Select>
                                    ) : (
                                        value as string
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EditableTable;
