import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "../../styles/Select";

const StyledTableCell = styled(TableCell)({
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderBottom: "2px solid #ccc"
});

const StyledTableRow = styled(TableRow)({
    "&:nth-of-type(odd)": {
        backgroundColor: "#fafafa"
    },
    "&:hover": {
        backgroundColor: "#f0f0f0"
    }
});

interface EditableTableProps {
    data: any[];
}

const editableColumns = [
    "1a PECA",
    "METAL",
    "PINTURA",
    "MARC",
    "PALLET",
    "PRE-PRO",
    "PRINT",
    "CORTE PLAST",
    "ACESS.",
    "VACUO",
    "CAIXA",
    "MONT \nE EMB"
];

const EDITABLE_COLUMNS_WIDTH = "150px";

const tableColumnsName: Record<string, string> = {
    pi: "PI",
    start: "START",
    projeto: "PROJETO",
    dtOp: "DT OP",
    pa: "PA",
    client: "CLIENTE",
    description: "DESCRIÇÃO",
    observacao: "OBSERVAÇÃO",
    estoque: "ESTOQUE",
    "1a PECA": "1a PECA",
    METAL: "METAL",
    PINTURA: "PINTURA",
    MARC: "MARC",
    PALLET: "PALLET",
    "PRE-PRO": "PRE-PRO",
    PRINT: "PRINT",
    "CORTE PLAST": "CORTE PLAST",
    "ACESS.": "ACESS.",
    VACUO: "VACUO",
    CAIXA: "CAIXA",
    "MONT \nE EMB": "MONT E EMB"
};

const columnWidths: Record<string, string> = {
    pi: "70px",
    start: "80px",
    projeto: "80px",
    dtOp: "80px",
    pa: "70px",
    client: "70px",
    description: "100px",
    observacao: "100px",
    estoque: "50px",
    "1a PECA": `${EDITABLE_COLUMNS_WIDTH}`,
    METAL: `${EDITABLE_COLUMNS_WIDTH}`,
    PINTURA: `${EDITABLE_COLUMNS_WIDTH}`,
    MARC: `${EDITABLE_COLUMNS_WIDTH}`,
    PALLET: `${EDITABLE_COLUMNS_WIDTH}`,
    "PRE-PRO": `${EDITABLE_COLUMNS_WIDTH}`,
    PRINT: `${EDITABLE_COLUMNS_WIDTH}`,
    "CORTE PLAST": `${EDITABLE_COLUMNS_WIDTH}`,
    "ACESS.": `${EDITABLE_COLUMNS_WIDTH}`,
    VACUO: `${EDITABLE_COLUMNS_WIDTH}`,
    CAIXA: `${EDITABLE_COLUMNS_WIDTH}`,
    "MONT \nE EMB": `${EDITABLE_COLUMNS_WIDTH}`,
};

const formatDate = (date: any) => {
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString("pt-BR");
    }
    return "";
};

const normalizeData = (data: any[]) => {
    return data.map((row) => {
        const normalizedRow: Record<string, string> = {};

        Object.keys(tableColumnsName).forEach((key) => {
            if (key in row) {
                if (typeof row[key] === "object" && row[key]?.$date) {
                    normalizedRow[key] = formatDate(row[key].$date);
                } else {
                    normalizedRow[key] = String(row[key] ?? "");
                }
            }
        });

        ["start", "projeto"].forEach((dateKey) => {
            if (row[dateKey]) {
                normalizedRow[dateKey] = formatDate(row[dateKey]);
            }
        });

        if (Array.isArray(row.phase)) {
            row.phase.forEach((phaseItem: { type: string; value: any }) => {
                if (tableColumnsName[phaseItem.type]) {
                    if (typeof phaseItem.value === "string" && Date.parse(phaseItem.value)) {
                        normalizedRow[phaseItem.type] = formatDate(new Date(phaseItem.value));
                    } else {
                        normalizedRow[phaseItem.type] = phaseItem.value;
                    }
                }
            });
        }
        return normalizedRow;
    });
};


const EditableTable: React.FC<EditableTableProps> = ({ data }) => {
    const [tableData, setTableData] = useState(normalizeData(data));
    const [originalValues] = useState(
        tableData.map(row => ({
            ...row
        }))
    );

    const handleChange = (newValue: string, rowIndex: number, field: string) => {
        const updatedData = [...tableData];
        const oldValue = updatedData[rowIndex][field];
        updatedData[rowIndex][field] = newValue;
        setTableData(updatedData);

        toast.success(
            `Valor da coluna ${tableColumnsName[field]} alterado de ${oldValue} para ${newValue}. Um e-mail foi enviado para teste@elemental.com.br`,
            {
                autoClose: 5000,
                position: "top-right",
                style: { width: "85%" }
            }
        );
    };

    return (
        <>
            <TableContainer>
                <Table sx={{ tableLayout: "fixed", width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            {Object.keys(tableColumnsName).map((key) => (
                                <StyledTableCell key={key} style={{ width: columnWidths[key] || "auto" }}>
                                    {tableColumnsName[key]}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, rowIndex) => (
                            <StyledTableRow key={rowIndex}>
                                {Object.keys(tableColumnsName).map((key) => (
                                    <TableCell
                                        key={key}
                                        style={{
                                            textAlign: "center",
                                            width: columnWidths[key] || "auto",
                                            whiteSpace: "normal",
                                            wordWrap: "break-word"
                                        }}
                                    >
                                        {editableColumns.includes(key) ? (
                                            <Select value={row[key]} onChange={(e) => handleChange(e.target.value, rowIndex, key)}>
                                                {typeof originalValues[rowIndex][key] === "string" &&
                                                    originalValues[rowIndex][key].split("/").length === 3 && (
                                                    <option value={originalValues[rowIndex][key]}>
                                                            {originalValues[rowIndex][key]}
                                                    </option>
                                                    )
                                                }
                                                <option value="-">-</option>
                                                <option value="N/A">N/A</option>
                                                <option value="ATRASADO">ATRASADO</option>
                                                <option value="NO PRAZO">NO PRAZO</option>
                                                <option value="ENTREGUE">ENTREGUE</option>
                                            </Select>
                                        ) : (
                                            row[key] as string
                                        )}
                                    </TableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </>
    );
};

export default EditableTable;
