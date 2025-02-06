import React, { useEffect, useState } from "react";
import FileUploader from "../components/FileUploader";
import EditableTable from "../components/Table/EditableTable";
import { Container, Box, Typography, Paper } from "@mui/material";

const Home: React.FC = () => {
    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        const initialData = [
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
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6427" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COTY",
                "createdAt": { "$date": "2025-02-04T17:57:01.489Z" },
                "description": "DISPLAY CHAO TENDENCIAS RISQUE",
                "dtOp": { "$date": "2024-11-22T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "09/01 AINDA SEM ARTE\n**PRAZO SERÁ INFORMADO APOS APROVACAO DA ARTE",
                "pa": "4400061",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Dec 16 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "Fri Dec 20 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Dec 17 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Dec 19 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Fri Dec 20 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.001/11",
                "projeto": "Thu Nov 21 00:00:00 GMT-03:00 2024",
                "start": "Mon Nov 18 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.489Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6428" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "SC JOHNSON",
                "createdAt": { "$date": "2025-02-04T17:57:01.500Z" },
                "description": "ILHA BAILARINA GPA",
                "dtOp": { "$date": "2024-11-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "**VERIFICAR QUANDO CHEGA PO",
                "pa": "4640052",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Jan 06 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "19.975/11",
                "projeto": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "start": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.500Z" },
                "du": 24
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6429" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.508Z" },
                "description": "BAY PADRÃO  C/ ENDCAP ",
                "dtOp": { "$date": "2024-08-07T03:00:00.000Z" },
                "estoque": "7",
                "imagem": "",
                "observacao": "28/11 - FINALIZAR ATÉ 29/11 FINAL DO DIA",
                "pa": "2270573",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.570/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.508Z" },
                "du": 84
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f642a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.515Z" },
                "description": "BAY PADRÃO  S/ ENDCAP ",
                "dtOp": { "$date": "2024-08-05T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "28/11 - FINALIZAR ATÉ 29/11 FINAL DO DIA",
                "pa": "2270569",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.570/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.515Z" },
                "du": 84
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f642b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.520Z" },
                "description": "BAY HERE - COM ENDCAP - SAO JOSE DO RIO PRETO",
                "dtOp": { "$date": "2024-11-12T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "",
                "pa": "2270600",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "N/A"
                    },
                    {
                        "type": "PINTURA",
                        "value": "N/A"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.976/11",
                "projeto": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "start": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.520Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f642c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.528Z" },
                "description": "GONDOLA LP - SEPHORA",
                "dtOp": { "$date": "2024-11-13T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "31/10 - CLIENTE SOLICITA INSTALAÇÃO 05/12 PARA 02/12",
                "pa": "2270597",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "19.945/10",
                "projeto": "Thu Nov 07 00:00:00 GMT-03:00 2024",
                "start": "Thu Oct 31 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.528Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f642d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.534Z" },
                "description": "PONTA DE GONDOLA HIBRIDA 2024",
                "dtOp": { "$date": "2024-07-26T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "09/12 - FINALIZADO",
                "pa": "5710013",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.474/07",
                "projeto": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "start": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.534Z" },
                "du": 78
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f642e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.539Z" },
                "description": "PONTA DE GONDOLA HEINEKEN GYC",
                "dtOp": { "$date": "2024-10-28T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "10/12 - DATA ALTERADA EM REUNIÃO PARA 16/12 + DEFINIR PRAZO DAS ULTIMAS 2 UNIDADES METAL",
                "pa": "5710004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "19.430/07",
                "projeto": "Mon Oct 28 00:00:00 GMT-03:00 2024",
                "start": "Mon Oct 28 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.539Z" }
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f642f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.544Z" },
                "description": "PONTA BAIXA HIBRIDA 2024 ASI",
                "dtOp": { "$date": "2024-08-14T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "10/12 - 03 UNIDADES EM EMBALAGEM + 01 UNIDADE PARA MONTAGEM E EMBALAGEM",
                "pa": "5710017",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.577/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Fri Aug 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.544Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6430" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.549Z" },
                "description": "BAY PADRAO - COM ENDCAP - 2306 LOJA JUNDIAI (SP)",
                "dtOp": { "$date": "2024-12-03T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + CORTE PLASTICO",
                "pa": "2270603",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.032/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.549Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6431" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.555Z" },
                "description": "BAY PADRAO - COM ENDCAP - 2308 LOJA NITEROI (RJ)",
                "dtOp": { "$date": "2024-12-03T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + CORTE PLASTICO",
                "pa": "2270604",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.032/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.555Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6432" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T17:57:01.560Z" },
                "description": "PLACA DE COMUNICAÇÃO TESTEIRA",
                "dtOp": { "$date": "2025-01-09T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "",
                "pa": "1211310P78",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "N/A"
                    },
                    {
                        "type": "PINTURA",
                        "value": "N/A"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "N/A"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.131/01",
                "projeto": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.560Z" },
                "du": 6
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6433" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.565Z" },
                "description": "ILHA CRAFT CLUB",
                "dtOp": { "$date": "2024-10-15T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MONTAGEM",
                "pa": "5710020",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.811/10",
                "projeto": "Fri Oct 11 00:00:00 GMT-03:00 2024",
                "start": "Tue Oct 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.565Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6434" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.570Z" },
                "description": "PAINEL EXPOSITOR FUSIOWALL",
                "dtOp": { "$date": "2024-12-02T03:00:00.000Z" },
                "estoque": "35",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "2270601",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "20.017/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.570Z" },
                "du": 27
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6435" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T17:57:01.576Z" },
                "description": "MOVEL CHB DE CSPR TAM G  COM IILUMINACAO ALT 2000MM X LARG 1300MM",
                "dtOp": { "$date": "2024-12-27T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL + MARCENARIA",
                "pa": "1211528",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.100/12",
                "projeto": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.576Z" },
                "du": 16
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6436" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "NESTLE",
                "createdAt": { "$date": "2025-02-04T17:57:01.582Z" },
                "description": "QUADRO DECORATIVO MOCA - ARTE BRIGADEIRO",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "5740346",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.102/12",
                "projeto": "Mon Dec 30 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.582Z" },
                "du": 19
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6437" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "NESTLE",
                "createdAt": { "$date": "2025-02-04T17:57:01.586Z" },
                "description": "QUADRO DECORATIVO MOCA - ARTE PUDIM",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "5740347",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.103/12",
                "projeto": "Mon Dec 30 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.586Z" },
                "du": 19
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6438" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T17:57:01.590Z" },
                "description": "DISPLAY FLUTUANTE 4 GANCHOS ARTE NOVA",
                "dtOp": { "$date": "2024-12-06T03:00:00.000Z" },
                "imagem": "",
                "observacao": "02/01 - METAL + IMPRESSÃO + CORTE",
                "pa": "4430031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.052/12",
                "projeto": "Thu Dec 05 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 05 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.590Z" },
                "du": 29
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6439" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "PONTELAND",
                "createdAt": { "$date": "2025-02-04T17:57:01.598Z" },
                "description": "DISPLAY CHAO SABONETE EM BARRA PHEBO",
                "dtOp": { "$date": "2024-12-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL",
                "pa": "6090001",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.068/12",
                "projeto": "Wed Dec 18 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 12 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.598Z" },
                "du": 35
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f643a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T17:57:01.605Z" },
                "description": "DY BALCAO DURACELL",
                "dtOp": { "$date": "2025-01-06T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "OPS ENTREGUE  06/01",
                "pa": "4430003",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "Tue Jan 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.120/01",
                "projeto": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.605Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f643b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T17:57:01.611Z" },
                "description": "DISPLAY CARONA DURACELL ARTE NOVA",
                "dtOp": { "$date": "2024-11-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "27/11 - SOLICITAÇÃO DE ALTERAÇÃO DE ARTE\n06/01 - RECEBIDA A ARTE NOVA, AGUARDANDO APROVACAO\n08/01- APROVADO CLIENTE",
                "pa": "4430035",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "19.987/11",
                "projeto": "Wed Nov 13 00:00:00 GMT-03:00 2024",
                "start": "Wed Nov 13 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.611Z" },
                "du": 48
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f643c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T17:57:01.618Z" },
                "description": "DY CARONA ",
                "dtOp": { "$date": "2025-01-06T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "08/01 - APROVADO CLIENTE",
                "pa": "4430035",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Jan 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.118/01",
                "projeto": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.618Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f643d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COCA-COLA",
                "createdAt": { "$date": "2025-02-04T17:57:01.622Z" },
                "description": "DY RACK FLEX",
                "dtOp": { "$date": "2025-01-08T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "07/01 - BRIEFING DE PEDIDO + START",
                "pa": "3800108",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Jan 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Tue Jan 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.116/01",
                "projeto": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "start": "Tue Jan 07 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.622Z" },
                "du": 17
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f643e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "JEQUITI",
                "createdAt": { "$date": "2025-02-04T17:57:01.627Z" },
                "description": "DY CHECKOUT NOVA ARTE",
                "dtOp": { "$date": "2025-01-09T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "5130170",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Jan 23 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.133/01",
                "projeto": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.627Z" },
                "du": 16
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f643f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "BHS ",
                "createdAt": { "$date": "2025-02-04T17:57:01.632Z" },
                "description": "DY COLETOR",
                "dtOp": { "$date": "2025-01-13T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "BRIEFING 09/01 OPS ENTREGUE 13/01",
                "pa": "5000030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Tue Jan 28 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 23 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.132/01",
                "projeto": "Fri Jan 10 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.632Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6440" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T17:57:01.636Z" },
                "description": "GRADE PARA CAPA PALLET",
                "estoque": "",
                "imagem": "",
                "observacao": "BRIEFING 17/01",
                "pa": "1211616",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Tue Feb 11 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.147/01",
                "projeto": "",
                "start": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.636Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6441" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COTY",
                "createdAt": { "$date": "2025-02-04T17:57:01.640Z" },
                "description": "DISPLAY DE CHAO INDIRETO FRAGRANCIA",
                "dtOp": { "$date": "2025-01-03T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO ARTE ",
                "pa": "4400062",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Tue Jan 28 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Wed Feb 12 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.115/01",
                "projeto": "Thu Jan 02 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 02 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.640Z" },
                "du": 29
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6442" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "INCOMM",
                "createdAt": { "$date": "2025-02-04T17:57:01.646Z" },
                "description": "DY GPA V2 MINUTO",
                "dtOp": { "$date": "2025-01-14T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO APORVAÇÃO",
                "pa": "3760066",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.140/01",
                "projeto": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.646Z" },
                "du": 23
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6443" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "INCOMM",
                "createdAt": { "$date": "2025-02-04T17:57:01.650Z" },
                "description": "DY GPA V2 EXTRA",
                "dtOp": { "$date": "2025-01-14T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO ARTE - RECEBENDO A ARTE ATE 22/01 ENTREGA EM 30/01",
                "pa": ".",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.141/01",
                "projeto": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.650Z" },
                "du": 23
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6444" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T17:57:01.655Z" },
                "description": "DY BOMBOMNIERE COLMEIA",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020002",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.144/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.655Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6445" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T17:57:01.659Z" },
                "description": "DY EXPOSITOR GELADEIRA INTERNO",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020003",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.145/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.659Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6446" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T17:57:01.664Z" },
                "description": "DY EXPOSITOR GELADEIRA EXTERNO",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.146/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.664Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6447" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.668Z" },
                "description": "TOTEM KERASTASE",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + METAL\n06/01 - 1a PECA DE METAL OK, FALTA MARCENARIA",
                "pa": "2270602",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.030/11",
                "projeto": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.668Z" },
                "du": 34
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6448" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T17:57:01.672Z" },
                "description": "GONDOLA LP - SEPHORA",
                "dtOp": { "$date": "2024-12-17T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL + MARCENARIA",
                "pa": "2270597",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Feb 07 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Fri Feb 07 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.069/12",
                "projeto": "Mon Dec 16 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 16 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T17:57:01.672Z" },
                "du": 39
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6449" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.675Z" },
                "description": "PG STANDARD TAM P - 1000MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.675Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f644a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.681Z" },
                "description": "PG STANDARD TAM PP - 800MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050013",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.681Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f644b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.686Z" },
                "description": "PG STANDARD TAM M - 1200MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050005",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.686Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f644c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.690Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  1000MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050025",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.690Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f644d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.693Z" },
                "description": "AMBIENTAÇÃO -ABSOLUT 1000MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050026",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.693Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f644e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.696Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  800MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050027",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.696Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f644f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.700Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  1200MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050029",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.700Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6450" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.703Z" },
                "description": "AMBIENTAÇÃO - ABSOLUT  1200MM",
                "estoque": "",
                "observacao": "",
                "pa": "6050030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.703Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6451" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.707Z" },
                "description": "PG PRATA  P -1000MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050001",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.707Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6452" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.710Z" },
                "description": "PG PRATA  M -1200MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050002",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.710Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6453" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.713Z" },
                "description": "PG PRATA  G-1350MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050016",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.713Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6454" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.717Z" },
                "description": "AMBIENTAÇÃO -   ABSOLUT PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050017",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.717Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6455" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.720Z" },
                "description": "AMBIENTAÇÃO ABSOLUT PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050018",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.720Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6456" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.723Z" },
                "description": "KIT AMBIENTAÇÃO ABSOLUT  PG PRATA - TAM G",
                "estoque": "",
                "observacao": "",
                "pa": "6050019",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.723Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6457" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.726Z" },
                "description": "KIT AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050020",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.726Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6458" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.729Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050021",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.729Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f6459" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.732Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM G",
                "estoque": "",
                "observacao": "",
                "pa": "6050022",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.732Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f645a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.736Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050023",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.736Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f645b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T17:57:01.739Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050024",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.739Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f645c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.742Z" },
                "description": "CHURRASCO AMSTEL ",
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.142/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.742Z" },
                "du": 36
            },
            {
                "_id": { "$oid": "67a254ed144074187f7f645d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T17:57:01.745Z" },
                "description": "DY DE CHAO HIBRIDO",
                "dtOp": { "$date": "2025-01-20T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.143/01",
                "projeto": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T17:57:01.745Z" },
                "du": 36
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f645e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.587Z" },
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
                "updatedAt": { "$date": "2025-02-04T18:03:27.587Z" }
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f645f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COTY",
                "createdAt": { "$date": "2025-02-04T18:03:27.596Z" },
                "description": "DISPLAY CHAO TENDENCIAS RISQUE",
                "dtOp": { "$date": "2024-11-22T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "09/01 AINDA SEM ARTE\n**PRAZO SERÁ INFORMADO APOS APROVACAO DA ARTE",
                "pa": "4400061",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Dec 16 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "Fri Dec 20 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Dec 17 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Dec 19 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Fri Dec 20 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.001/11",
                "projeto": "Thu Nov 21 00:00:00 GMT-03:00 2024",
                "start": "Mon Nov 18 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.596Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6460" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "SC JOHNSON",
                "createdAt": { "$date": "2025-02-04T18:03:27.599Z" },
                "description": "ILHA BAILARINA GPA",
                "dtOp": { "$date": "2024-11-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "**VERIFICAR QUANDO CHEGA PO",
                "pa": "4640052",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Jan 06 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "19.975/11",
                "projeto": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "start": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.599Z" },
                "du": 24
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6461" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.603Z" },
                "description": "BAY PADRÃO  C/ ENDCAP ",
                "dtOp": { "$date": "2024-08-07T03:00:00.000Z" },
                "estoque": "7",
                "imagem": "",
                "observacao": "28/11 - FINALIZAR ATÉ 29/11 FINAL DO DIA",
                "pa": "2270573",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.570/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.603Z" },
                "du": 84
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6462" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.606Z" },
                "description": "BAY PADRÃO  S/ ENDCAP ",
                "dtOp": { "$date": "2024-08-05T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "28/11 - FINALIZAR ATÉ 29/11 FINAL DO DIA",
                "pa": "2270569",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.570/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.606Z" },
                "du": 84
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6463" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.625Z" },
                "description": "BAY HERE - COM ENDCAP - SAO JOSE DO RIO PRETO",
                "dtOp": { "$date": "2024-11-12T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "",
                "pa": "2270600",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "N/A"
                    },
                    {
                        "type": "PINTURA",
                        "value": "N/A"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.976/11",
                "projeto": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "start": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.625Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6464" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.630Z" },
                "description": "GONDOLA LP - SEPHORA",
                "dtOp": { "$date": "2024-11-13T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "31/10 - CLIENTE SOLICITA INSTALAÇÃO 05/12 PARA 02/12",
                "pa": "2270597",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "19.945/10",
                "projeto": "Thu Nov 07 00:00:00 GMT-03:00 2024",
                "start": "Thu Oct 31 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.630Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6465" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.633Z" },
                "description": "PONTA DE GONDOLA HIBRIDA 2024",
                "dtOp": { "$date": "2024-07-26T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "09/12 - FINALIZADO",
                "pa": "5710013",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.474/07",
                "projeto": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "start": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.633Z" },
                "du": 78
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6466" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.637Z" },
                "description": "PONTA DE GONDOLA HEINEKEN GYC",
                "dtOp": { "$date": "2024-10-28T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "10/12 - DATA ALTERADA EM REUNIÃO PARA 16/12 + DEFINIR PRAZO DAS ULTIMAS 2 UNIDADES METAL",
                "pa": "5710004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "19.430/07",
                "projeto": "Mon Oct 28 00:00:00 GMT-03:00 2024",
                "start": "Mon Oct 28 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.637Z" }
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6467" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.641Z" },
                "description": "PONTA BAIXA HIBRIDA 2024 ASI",
                "dtOp": { "$date": "2024-08-14T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "10/12 - 03 UNIDADES EM EMBALAGEM + 01 UNIDADE PARA MONTAGEM E EMBALAGEM",
                "pa": "5710017",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.577/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Fri Aug 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.641Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6468" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.644Z" },
                "description": "BAY PADRAO - COM ENDCAP - 2306 LOJA JUNDIAI (SP)",
                "dtOp": { "$date": "2024-12-03T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + CORTE PLASTICO",
                "pa": "2270603",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.032/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.644Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6469" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.648Z" },
                "description": "BAY PADRAO - COM ENDCAP - 2308 LOJA NITEROI (RJ)",
                "dtOp": { "$date": "2024-12-03T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + CORTE PLASTICO",
                "pa": "2270604",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.032/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.648Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f646a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T18:03:27.652Z" },
                "description": "PLACA DE COMUNICAÇÃO TESTEIRA",
                "dtOp": { "$date": "2025-01-09T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "",
                "pa": "1211310P78",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "N/A"
                    },
                    {
                        "type": "PINTURA",
                        "value": "N/A"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "N/A"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.131/01",
                "projeto": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.652Z" },
                "du": 6
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f646b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.655Z" },
                "description": "ILHA CRAFT CLUB",
                "dtOp": { "$date": "2024-10-15T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MONTAGEM",
                "pa": "5710020",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.811/10",
                "projeto": "Fri Oct 11 00:00:00 GMT-03:00 2024",
                "start": "Tue Oct 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.655Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f646c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.658Z" },
                "description": "PAINEL EXPOSITOR FUSIOWALL",
                "dtOp": { "$date": "2024-12-02T03:00:00.000Z" },
                "estoque": "35",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "2270601",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "20.017/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.658Z" },
                "du": 27
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f646d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T18:03:27.661Z" },
                "description": "MOVEL CHB DE CSPR TAM G  COM IILUMINACAO ALT 2000MM X LARG 1300MM",
                "dtOp": { "$date": "2024-12-27T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL + MARCENARIA",
                "pa": "1211528",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.100/12",
                "projeto": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.661Z" },
                "du": 16
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f646e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "NESTLE",
                "createdAt": { "$date": "2025-02-04T18:03:27.665Z" },
                "description": "QUADRO DECORATIVO MOCA - ARTE BRIGADEIRO",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "5740346",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.102/12",
                "projeto": "Mon Dec 30 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.665Z" },
                "du": 19
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f646f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "NESTLE",
                "createdAt": { "$date": "2025-02-04T18:03:27.669Z" },
                "description": "QUADRO DECORATIVO MOCA - ARTE PUDIM",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "5740347",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.103/12",
                "projeto": "Mon Dec 30 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.669Z" },
                "du": 19
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6470" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:03:27.672Z" },
                "description": "DISPLAY FLUTUANTE 4 GANCHOS ARTE NOVA",
                "dtOp": { "$date": "2024-12-06T03:00:00.000Z" },
                "imagem": "",
                "observacao": "02/01 - METAL + IMPRESSÃO + CORTE",
                "pa": "4430031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.052/12",
                "projeto": "Thu Dec 05 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 05 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.672Z" },
                "du": 29
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6471" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "PONTELAND",
                "createdAt": { "$date": "2025-02-04T18:03:27.676Z" },
                "description": "DISPLAY CHAO SABONETE EM BARRA PHEBO",
                "dtOp": { "$date": "2024-12-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL",
                "pa": "6090001",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.068/12",
                "projeto": "Wed Dec 18 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 12 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.676Z" },
                "du": 35
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6472" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:03:27.679Z" },
                "description": "DY BALCAO DURACELL",
                "dtOp": { "$date": "2025-01-06T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "OPS ENTREGUE  06/01",
                "pa": "4430003",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "Tue Jan 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.120/01",
                "projeto": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.679Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6473" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:03:27.683Z" },
                "description": "DISPLAY CARONA DURACELL ARTE NOVA",
                "dtOp": { "$date": "2024-11-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "27/11 - SOLICITAÇÃO DE ALTERAÇÃO DE ARTE\n06/01 - RECEBIDA A ARTE NOVA, AGUARDANDO APROVACAO\n08/01- APROVADO CLIENTE",
                "pa": "4430035",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "19.987/11",
                "projeto": "Wed Nov 13 00:00:00 GMT-03:00 2024",
                "start": "Wed Nov 13 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.683Z" },
                "du": 48
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6474" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:03:27.688Z" },
                "description": "DY CARONA ",
                "dtOp": { "$date": "2025-01-06T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "08/01 - APROVADO CLIENTE",
                "pa": "4430035",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Jan 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.118/01",
                "projeto": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.688Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6475" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COCA-COLA",
                "createdAt": { "$date": "2025-02-04T18:03:27.691Z" },
                "description": "DY RACK FLEX",
                "dtOp": { "$date": "2025-01-08T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "07/01 - BRIEFING DE PEDIDO + START",
                "pa": "3800108",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Jan 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Tue Jan 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.116/01",
                "projeto": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "start": "Tue Jan 07 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.691Z" },
                "du": 17
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6476" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "JEQUITI",
                "createdAt": { "$date": "2025-02-04T18:03:27.695Z" },
                "description": "DY CHECKOUT NOVA ARTE",
                "dtOp": { "$date": "2025-01-09T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "5130170",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Jan 23 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.133/01",
                "projeto": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.695Z" },
                "du": 16
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6477" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "BHS ",
                "createdAt": { "$date": "2025-02-04T18:03:27.701Z" },
                "description": "DY COLETOR",
                "dtOp": { "$date": "2025-01-13T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "BRIEFING 09/01 OPS ENTREGUE 13/01",
                "pa": "5000030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Tue Jan 28 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 23 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.132/01",
                "projeto": "Fri Jan 10 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.701Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6478" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T18:03:27.704Z" },
                "description": "GRADE PARA CAPA PALLET",
                "estoque": "",
                "imagem": "",
                "observacao": "BRIEFING 17/01",
                "pa": "1211616",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Tue Feb 11 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.147/01",
                "projeto": "",
                "start": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.704Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6479" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COTY",
                "createdAt": { "$date": "2025-02-04T18:03:27.710Z" },
                "description": "DISPLAY DE CHAO INDIRETO FRAGRANCIA",
                "dtOp": { "$date": "2025-01-03T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO ARTE ",
                "pa": "4400062",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Tue Jan 28 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Wed Feb 12 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.115/01",
                "projeto": "Thu Jan 02 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 02 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.710Z" },
                "du": 29
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f647a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "INCOMM",
                "createdAt": { "$date": "2025-02-04T18:03:27.713Z" },
                "description": "DY GPA V2 MINUTO",
                "dtOp": { "$date": "2025-01-14T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO APORVAÇÃO",
                "pa": "3760066",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.140/01",
                "projeto": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.713Z" },
                "du": 23
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f647b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "INCOMM",
                "createdAt": { "$date": "2025-02-04T18:03:27.717Z" },
                "description": "DY GPA V2 EXTRA",
                "dtOp": { "$date": "2025-01-14T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO ARTE - RECEBENDO A ARTE ATE 22/01 ENTREGA EM 30/01",
                "pa": ".",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.141/01",
                "projeto": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.717Z" },
                "du": 23
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f647c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T18:03:27.721Z" },
                "description": "DY BOMBOMNIERE COLMEIA",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020002",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.144/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.721Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f647d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T18:03:27.725Z" },
                "description": "DY EXPOSITOR GELADEIRA INTERNO",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020003",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.145/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.725Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f647e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T18:03:27.727Z" },
                "description": "DY EXPOSITOR GELADEIRA EXTERNO",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.146/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.727Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f647f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.731Z" },
                "description": "TOTEM KERASTASE",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + METAL\n06/01 - 1a PECA DE METAL OK, FALTA MARCENARIA",
                "pa": "2270602",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.030/11",
                "projeto": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.731Z" },
                "du": 34
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6480" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:03:27.735Z" },
                "description": "GONDOLA LP - SEPHORA",
                "dtOp": { "$date": "2024-12-17T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL + MARCENARIA",
                "pa": "2270597",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Feb 07 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Fri Feb 07 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.069/12",
                "projeto": "Mon Dec 16 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 16 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:03:27.735Z" },
                "du": 39
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6481" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.738Z" },
                "description": "PG STANDARD TAM P - 1000MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.738Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6482" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.742Z" },
                "description": "PG STANDARD TAM PP - 800MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050013",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.742Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6483" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.745Z" },
                "description": "PG STANDARD TAM M - 1200MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050005",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.745Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6484" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.749Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  1000MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050025",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.749Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6485" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.752Z" },
                "description": "AMBIENTAÇÃO -ABSOLUT 1000MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050026",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.752Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6486" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.756Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  800MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050027",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.756Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6487" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.759Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  1200MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050029",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.759Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6488" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.762Z" },
                "description": "AMBIENTAÇÃO - ABSOLUT  1200MM",
                "estoque": "",
                "observacao": "",
                "pa": "6050030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.762Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6489" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.766Z" },
                "description": "PG PRATA  P -1000MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050001",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.766Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f648a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.769Z" },
                "description": "PG PRATA  M -1200MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050002",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.769Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f648b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.773Z" },
                "description": "PG PRATA  G-1350MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050016",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.773Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f648c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.777Z" },
                "description": "AMBIENTAÇÃO -   ABSOLUT PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050017",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.777Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f648d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.780Z" },
                "description": "AMBIENTAÇÃO ABSOLUT PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050018",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.780Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f648e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.785Z" },
                "description": "KIT AMBIENTAÇÃO ABSOLUT  PG PRATA - TAM G",
                "estoque": "",
                "observacao": "",
                "pa": "6050019",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.785Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f648f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.794Z" },
                "description": "KIT AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050020",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.794Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6490" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.800Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050021",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.800Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6491" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.804Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM G",
                "estoque": "",
                "observacao": "",
                "pa": "6050022",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.804Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6492" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.808Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050023",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.808Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6493" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:03:27.811Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050024",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.811Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6494" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.816Z" },
                "description": "CHURRASCO AMSTEL ",
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.142/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.816Z" },
                "du": 36
            },
            {
                "_id": { "$oid": "67a2566f144074187f7f6495" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:03:27.821Z" },
                "description": "DY DE CHAO HIBRIDO",
                "dtOp": { "$date": "2025-01-20T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.143/01",
                "projeto": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:03:27.821Z" },
                "du": 36
            },
            {
                "_id": { "$oid": "67a25727144074187f7f6496" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:06:31.808Z" },
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
                "updatedAt": { "$date": "2025-02-04T18:06:31.808Z" }
            },
            {
                "_id": { "$oid": "67a25821144074187f7f6497" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COTY",
                "createdAt": { "$date": "2025-02-04T18:10:41.336Z" },
                "description": "DISPLAY CHAO TENDENCIAS RISQUE",
                "dtOp": { "$date": "2024-11-22T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "09/01 AINDA SEM ARTE\n**PRAZO SERÁ INFORMADO APOS APROVACAO DA ARTE",
                "pa": "4400061",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Dec 16 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "Fri Dec 20 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Dec 17 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Dec 19 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Fri Dec 20 00:00:00 GMT-03:00 2024"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.001/11",
                "projeto": "Thu Nov 21 00:00:00 GMT-03:00 2024",
                "start": "Mon Nov 18 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.336Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a25821144074187f7f6498" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "SC JOHNSON",
                "createdAt": { "$date": "2025-02-04T18:10:41.401Z" },
                "description": "ILHA BAILARINA GPA",
                "dtOp": { "$date": "2024-11-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "**VERIFICAR QUANDO CHEGA PO",
                "pa": "4640052",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Jan 06 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "19.975/11",
                "projeto": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "start": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.401Z" },
                "du": 24
            },
            {
                "_id": { "$oid": "67a25821144074187f7f6499" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.435Z" },
                "description": "BAY PADRÃO  C/ ENDCAP ",
                "dtOp": { "$date": "2024-08-07T03:00:00.000Z" },
                "estoque": "7",
                "imagem": "",
                "observacao": "28/11 - FINALIZAR ATÉ 29/11 FINAL DO DIA",
                "pa": "2270573",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.570/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.435Z" },
                "du": 84
            },
            {
                "_id": { "$oid": "67a25821144074187f7f649a" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.468Z" },
                "description": "BAY PADRÃO  S/ ENDCAP ",
                "dtOp": { "$date": "2024-08-05T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "28/11 - FINALIZAR ATÉ 29/11 FINAL DO DIA",
                "pa": "2270569",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.570/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Tue Jul 30 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.468Z" },
                "du": 84
            },
            {
                "_id": { "$oid": "67a25821144074187f7f649b" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.491Z" },
                "description": "BAY HERE - COM ENDCAP - SAO JOSE DO RIO PRETO",
                "dtOp": { "$date": "2024-11-12T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "",
                "pa": "2270600",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "N/A"
                    },
                    {
                        "type": "PINTURA",
                        "value": "N/A"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.976/11",
                "projeto": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "start": "Fri Nov 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.491Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a25821144074187f7f649c" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.513Z" },
                "description": "GONDOLA LP - SEPHORA",
                "dtOp": { "$date": "2024-11-13T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "31/10 - CLIENTE SOLICITA INSTALAÇÃO 05/12 PARA 02/12",
                "pa": "2270597",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "19.945/10",
                "projeto": "Thu Nov 07 00:00:00 GMT-03:00 2024",
                "start": "Thu Oct 31 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.513Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a25821144074187f7f649d" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:41.537Z" },
                "description": "PONTA DE GONDOLA HIBRIDA 2024",
                "dtOp": { "$date": "2024-07-26T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "09/12 - FINALIZADO",
                "pa": "5710013",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.474/07",
                "projeto": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "start": "Fri Jul 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.537Z" },
                "du": 78
            },
            {
                "_id": { "$oid": "67a25821144074187f7f649e" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:41.562Z" },
                "description": "PONTA DE GONDOLA HEINEKEN GYC",
                "dtOp": { "$date": "2024-10-28T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "10/12 - DATA ALTERADA EM REUNIÃO PARA 16/12 + DEFINIR PRAZO DAS ULTIMAS 2 UNIDADES METAL",
                "pa": "5710004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "19.430/07",
                "projeto": "Mon Oct 28 00:00:00 GMT-03:00 2024",
                "start": "Mon Oct 28 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.562Z" }
            },
            {
                "_id": { "$oid": "67a25821144074187f7f649f" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:41.587Z" },
                "description": "PONTA BAIXA HIBRIDA 2024 ASI",
                "dtOp": { "$date": "2024-08-14T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "10/12 - 03 UNIDADES EM EMBALAGEM + 01 UNIDADE PARA MONTAGEM E EMBALAGEM",
                "pa": "5710017",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "N/A"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.577/07",
                "projeto": "Mon Aug 05 00:00:00 GMT-03:00 2024",
                "start": "Fri Aug 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.587Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a0" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.610Z" },
                "description": "BAY PADRAO - COM ENDCAP - 2306 LOJA JUNDIAI (SP)",
                "dtOp": { "$date": "2024-12-03T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + CORTE PLASTICO",
                "pa": "2270603",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.032/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.610Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a1" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.635Z" },
                "description": "BAY PADRAO - COM ENDCAP - 2308 LOJA NITEROI (RJ)",
                "dtOp": { "$date": "2024-12-03T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + CORTE PLASTICO",
                "pa": "2270604",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.032/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.635Z" },
                "du": 26
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a2" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T18:10:41.665Z" },
                "description": "PLACA DE COMUNICAÇÃO TESTEIRA",
                "dtOp": { "$date": "2025-01-09T03:00:00.000Z" },
                "estoque": "2",
                "imagem": "",
                "observacao": "",
                "pa": "1211310P78",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "N/A"
                    },
                    {
                        "type": "PINTURA",
                        "value": "N/A"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "N/A"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "N/A"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.131/01",
                "projeto": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:41.665Z" },
                "du": 6
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a3" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:41.688Z" },
                "description": "ILHA CRAFT CLUB",
                "dtOp": { "$date": "2024-10-15T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MONTAGEM",
                "pa": "5710020",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": ""
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "19.811/10",
                "projeto": "Fri Oct 11 00:00:00 GMT-03:00 2024",
                "start": "Tue Oct 08 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.688Z" },
                "du": 28
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a4" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:41.711Z" },
                "description": "PAINEL EXPOSITOR FUSIOWALL",
                "dtOp": { "$date": "2024-12-02T03:00:00.000Z" },
                "estoque": "35",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "2270601",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "CONCLUIDO COM ATRASO"
                    }
                ],
                "pi": "20.017/11",
                "projeto": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 02 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.711Z" },
                "du": 27
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a5" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T18:10:41.739Z" },
                "description": "MOVEL CHB DE CSPR TAM G  COM IILUMINACAO ALT 2000MM X LARG 1300MM",
                "dtOp": { "$date": "2024-12-27T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL + MARCENARIA",
                "pa": "1211528",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "PRINT",
                        "value": "CONCLUIDO COM ATRASO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "NO PRAZO"
                    }
                ],
                "pi": "20.100/12",
                "projeto": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.739Z" },
                "du": 16
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a6" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "NESTLE",
                "createdAt": { "$date": "2025-02-04T18:10:41.811Z" },
                "description": "QUADRO DECORATIVO MOCA - ARTE BRIGADEIRO",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "5740346",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.102/12",
                "projeto": "Mon Dec 30 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.811Z" },
                "du": 19
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a7" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "NESTLE",
                "createdAt": { "$date": "2025-02-04T18:10:41.835Z" },
                "description": "QUADRO DECORATIVO MOCA - ARTE PUDIM",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA",
                "pa": "5740347",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.103/12",
                "projeto": "Mon Dec 30 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.835Z" },
                "du": 19
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a8" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:10:41.862Z" },
                "description": "DISPLAY FLUTUANTE 4 GANCHOS ARTE NOVA",
                "dtOp": { "$date": "2024-12-06T03:00:00.000Z" },
                "imagem": "",
                "observacao": "02/01 - METAL + IMPRESSÃO + CORTE",
                "pa": "4430031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.052/12",
                "projeto": "Thu Dec 05 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 05 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.862Z" },
                "du": 29
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64a9" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "PONTELAND",
                "createdAt": { "$date": "2025-02-04T18:10:41.887Z" },
                "description": "DISPLAY CHAO SABONETE EM BARRA PHEBO",
                "dtOp": { "$date": "2024-12-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL",
                "pa": "6090001",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "ANTECIPADO"
                    }
                ],
                "pi": "20.068/12",
                "projeto": "Wed Dec 18 00:00:00 GMT-03:00 2024",
                "start": "Thu Dec 12 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.887Z" },
                "du": 35
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64aa" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:10:41.910Z" },
                "description": "DY BALCAO DURACELL",
                "dtOp": { "$date": "2025-01-06T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "OPS ENTREGUE  06/01",
                "pa": "4430003",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "Tue Jan 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.120/01",
                "projeto": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:41.910Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64ab" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:10:41.933Z" },
                "description": "DISPLAY CARONA DURACELL ARTE NOVA",
                "dtOp": { "$date": "2024-11-18T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "27/11 - SOLICITAÇÃO DE ALTERAÇÃO DE ARTE\n06/01 - RECEBIDA A ARTE NOVA, AGUARDANDO APROVACAO\n08/01- APROVADO CLIENTE",
                "pa": "4430035",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "19.987/11",
                "projeto": "Wed Nov 13 00:00:00 GMT-03:00 2024",
                "start": "Wed Nov 13 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:41.933Z" },
                "du": 48
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64ac" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "DURACELL",
                "createdAt": { "$date": "2025-02-04T18:10:41.958Z" },
                "description": "DY CARONA ",
                "dtOp": { "$date": "2025-01-06T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "08/01 - APROVADO CLIENTE",
                "pa": "4430035",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Jan 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.118/01",
                "projeto": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 06 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:41.958Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a25821144074187f7f64ad" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COCA-COLA",
                "createdAt": { "$date": "2025-02-04T18:10:41.982Z" },
                "description": "DY RACK FLEX",
                "dtOp": { "$date": "2025-01-08T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "07/01 - BRIEFING DE PEDIDO + START",
                "pa": "3800108",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Jan 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Tue Jan 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Jan 24 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.116/01",
                "projeto": "Wed Jan 08 00:00:00 GMT-03:00 2025",
                "start": "Tue Jan 07 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:41.982Z" },
                "du": 17
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64ae" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "JEQUITI",
                "createdAt": { "$date": "2025-02-04T18:10:42.005Z" },
                "description": "DY CHECKOUT NOVA ARTE",
                "dtOp": { "$date": "2025-01-09T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "5130170",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Jan 23 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRINT",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.133/01",
                "projeto": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.005Z" },
                "du": 16
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64af" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "BHS ",
                "createdAt": { "$date": "2025-02-04T18:10:42.027Z" },
                "description": "DY COLETOR",
                "dtOp": { "$date": "2025-01-13T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "BRIEFING 09/01 OPS ENTREGUE 13/01",
                "pa": "5000030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Tue Jan 28 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 23 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 22 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.132/01",
                "projeto": "Fri Jan 10 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 09 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.027Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b0" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COLGATE",
                "createdAt": { "$date": "2025-02-04T18:10:42.051Z" },
                "description": "GRADE PARA CAPA PALLET",
                "estoque": "",
                "imagem": "",
                "observacao": "BRIEFING 17/01",
                "pa": "1211616",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "N/A"
                    },
                    {
                        "type": "METAL",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "N/A"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Jan 27 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Tue Feb 11 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.147/01",
                "projeto": "",
                "start": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.051Z" },
                "du": 18
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b1" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "COTY",
                "createdAt": { "$date": "2025-02-04T18:10:42.075Z" },
                "description": "DISPLAY DE CHAO INDIRETO FRAGRANCIA",
                "dtOp": { "$date": "2025-01-03T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO ARTE ",
                "pa": "4400062",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Tue Jan 28 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Wed Feb 12 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.115/01",
                "projeto": "Thu Jan 02 00:00:00 GMT-03:00 2025",
                "start": "Thu Jan 02 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.075Z" },
                "du": 29
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b2" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "INCOMM",
                "createdAt": { "$date": "2025-02-04T18:10:42.098Z" },
                "description": "DY GPA V2 MINUTO",
                "dtOp": { "$date": "2025-01-14T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO APORVAÇÃO",
                "pa": "3760066",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.140/01",
                "projeto": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.098Z" },
                "du": 23
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b3" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "INCOMM",
                "createdAt": { "$date": "2025-02-04T18:10:42.122Z" },
                "description": "DY GPA V2 EXTRA",
                "dtOp": { "$date": "2025-01-14T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "AGUARDANDO ARTE - RECEBENDO A ARTE ATE 22/01 ENTREGA EM 30/01",
                "pa": ".",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.141/01",
                "projeto": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 13 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.122Z" },
                "du": 23
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b4" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T18:10:42.147Z" },
                "description": "DY BOMBOMNIERE COLMEIA",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020002",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.144/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.147Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b5" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T18:10:42.171Z" },
                "description": "DY EXPOSITOR GELADEIRA INTERNO",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020003",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.145/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.171Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b6" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "OXXO",
                "createdAt": { "$date": "2025-02-04T18:10:42.195Z" },
                "description": "DY EXPOSITOR GELADEIRA EXTERNO",
                "dtOp": { "$date": "2025-01-16T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "6020004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.146/01",
                "projeto": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.195Z" },
                "du": 22
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b7" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:42.219Z" },
                "description": "TOTEM KERASTASE",
                "dtOp": { "$date": "2024-12-30T03:00:00.000Z" },
                "estoque": "1",
                "imagem": "",
                "observacao": "02/01 - MARCENARIA + METAL\n06/01 - 1a PECA DE METAL OK, FALTA MARCENARIA",
                "pa": "2270602",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "ANTECIPADO"
                    },
                    {
                        "type": "METAL",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PINTURA",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 04 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Wed Jan 29 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.030/11",
                "projeto": "Thu Dec 26 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 23 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:42.219Z" },
                "du": 34
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b8" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "LOREAL ",
                "createdAt": { "$date": "2025-02-04T18:10:42.247Z" },
                "description": "GONDOLA LP - SEPHORA",
                "dtOp": { "$date": "2024-12-17T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "02/01 - METAL + MARCENARIA",
                "pa": "2270597",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Thu Feb 06 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Fri Feb 07 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "PALLET",
                        "value": "N/A"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Mon Feb 03 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Wed Feb 05 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Fri Feb 07 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "NO PRAZO"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Jan 30 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.069/12",
                "projeto": "Mon Dec 16 00:00:00 GMT-03:00 2024",
                "start": "Mon Dec 16 00:00:00 GMT-03:00 2024",
                "updatedAt": { "$date": "2025-02-04T18:10:42.247Z" },
                "du": 39
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64b9" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.274Z" },
                "description": "PG STANDARD TAM P - 1000MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050004",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.274Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64ba" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.301Z" },
                "description": "PG STANDARD TAM PP - 800MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050013",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.301Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64bb" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.336Z" },
                "description": "PG STANDARD TAM M - 1200MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050005",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.148/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.336Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64bc" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.369Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  1000MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050025",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.369Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64bd" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.397Z" },
                "description": "AMBIENTAÇÃO -ABSOLUT 1000MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050026",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.397Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64be" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.421Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  800MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050027",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.421Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64bf" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.445Z" },
                "description": "AMBIENTAÇÃO -CHIVAS  1200MM PG STANDARD",
                "estoque": "",
                "observacao": "",
                "pa": "6050029",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.445Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c0" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.472Z" },
                "description": "AMBIENTAÇÃO - ABSOLUT  1200MM",
                "estoque": "",
                "observacao": "",
                "pa": "6050030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.472Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c1" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.499Z" },
                "description": "PG PRATA  P -1000MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050001",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.499Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c2" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.527Z" },
                "description": "PG PRATA  M -1200MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050002",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.527Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c3" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.557Z" },
                "description": "PG PRATA  G-1350MM",
                "estoque": "",
                "imagem": "",
                "observacao": "",
                "pa": "6050016",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.150/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.557Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c4" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.583Z" },
                "description": "AMBIENTAÇÃO -   ABSOLUT PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050017",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.583Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c5" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.612Z" },
                "description": "AMBIENTAÇÃO ABSOLUT PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050018",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.612Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c6" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.635Z" },
                "description": "KIT AMBIENTAÇÃO ABSOLUT  PG PRATA - TAM G",
                "estoque": "",
                "observacao": "",
                "pa": "6050019",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.635Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c7" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.659Z" },
                "description": "KIT AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050020",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.659Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c8" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.685Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050021",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.685Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64c9" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.709Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM G",
                "estoque": "",
                "observacao": "",
                "pa": "6050022",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.709Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64ca" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.754Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM P",
                "estoque": "",
                "observacao": "",
                "pa": "6050023",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.754Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64cb" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "RISE",
                "createdAt": { "$date": "2025-02-04T18:10:42.789Z" },
                "description": "AMBIENTAÇÃO BEEFEATER   PG PRATA - TAM M",
                "estoque": "",
                "observacao": "",
                "pa": "6050024",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Wed Feb 19 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Fri Feb 14 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Thu Feb 13 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Thu Feb 27 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.149/01",
                "projeto": "",
                "start": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.789Z" },
                "du": 20
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64cc" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:42.818Z" },
                "description": "CHURRASCO AMSTEL ",
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710030",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.142/01",
                "projeto": "Mon Jan 20 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.818Z" },
                "du": 36
            },
            {
                "_id": { "$oid": "67a25822144074187f7f64cd" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:42.856Z" },
                "description": "DY DE CHAO HIBRIDO",
                "dtOp": { "$date": "2025-01-20T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.143/01",
                "projeto": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.856Z" },
                "du": 36
            }
        ];

        setTableData(initialData as any[]);
    }, []);

    const handleFileUpload = async (file: File) => {
        //consta data = await uploadFile(file);
        const data = [
            {
                "_id": { "$oid": "67a25822144074187f7f64cd" },
                "_class": "br.com.elemental.creative.domain.entity.Order",
                "client": "TIWA",
                "createdAt": { "$date": "2025-02-04T18:10:42.856Z" },
                "description": "DY DE CHAO HIBRIDO",
                "dtOp": { "$date": "2025-01-20T03:00:00.000Z" },
                "estoque": "",
                "imagem": "",
                "observacao": "START  DE PEDIDO 15/01",
                "pa": "5710031",
                "phase": [
                    {
                        "type": "1a PECA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "METAL",
                        "value": "Fri Feb 21 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PINTURA",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MARC",
                        "value": "N/A"
                    },
                    {
                        "type": "PALLET",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRE-PRO",
                        "value": "Tue Feb 18 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "PRINT",
                        "value": "Thu Feb 20 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "CORTE PLAST",
                        "value": "Mon Feb 24 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "ACESS.",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "VACUO",
                        "value": "N/A"
                    },
                    {
                        "type": "CAIXA",
                        "value": "Mon Feb 17 00:00:00 GMT-03:00 2025"
                    },
                    {
                        "type": "MONT \nE EMB",
                        "value": "Mon Mar 03 00:00:00 GMT-03:00 2025"
                    }
                ],
                "pi": "20.143/01",
                "projeto": "Fri Jan 17 00:00:00 GMT-03:00 2025",
                "start": "Wed Jan 15 00:00:00 GMT-03:00 2025",
                "updatedAt": { "$date": "2025-02-04T18:10:42.856Z" },
                "du": 36
            }
        ];
        setTableData(data as any[]);
    };

    return (
        <Container
            maxWidth={false}
            sx={{ width: "100vw", minHeight: "100vh", mt: 4, textAlign: "center" }}
        >
            <Box mb={3}>
                <img
                    src="https://www.creativedisplay.com.br/wp-content/uploads/2024/03/creative-display-logo.svg"
                    alt="Creative Display Logo"
                    style={{ maxWidth: "200px" }}
                />
            </Box>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Upload de Arquivo
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
