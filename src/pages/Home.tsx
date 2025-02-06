import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import EditableTable from "../components/Table/EditableTable";
import { Container, Box, Typography, Paper } from "@mui/material";

const Home: React.FC = () => {
    const [tableData, setTableData] = useState<any[]>([]);

    const handleFileUpload = async (file: File) => {
        const data = [
            {
                "_id": { "$oid": "67a254ed144074187f7f6426" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.204Z" },
                "description": "DISPLAY DE CHÃO SOL",
                "dtOp": { "$date": "2024-07-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "12/11 - PEDIDO PARADO AGUARDANDO RETORNO COMERCIAL",
                "pa": "5710014",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "-"
                    },
                    {
                        "type": "METAL",
                        "value": "-"
                    },
                    {
                        "type": "PINTURA",
                        "value": "-"
                    },
                    {
                        "type": "MARC",
                        "value": "-"
                    },
                    {
                        "type": "PALLET",
                        "value": "-"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "-"
                    },
                    {
                        "type": "PRINT",
                        "value": "-"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "-"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "-"
                    },
                    {
                        "type": "CAIXA",
                        "value": "-"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "-"
                    }
                ],
                "pi": "19.537/08",
                "projeto": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "start": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.204Z" }
            }
        ];
        setTableData(data as any[]);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
            <Box mb={3}>
                <img
                    src="https://www.creativedisplay.com.br/wp-content/uploads/2024/03/creative-display-logo.svg"
                    alt="Creative Display Logo"
                    style={{ maxWidth: "200px" }}
                />
            </Box>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Upload de Arquivo Excel
                </Typography>
                <FileUploader onFileUpload={handleFileUpload} />
            </Paper>
            {tableData.length > 0 && (
                <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
                    <EditableTable data={tableData} />
                </Paper>
            )}
        </Container>
    );
};

export default Home;
