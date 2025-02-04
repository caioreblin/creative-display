import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import EditableTable from "../components/Table/EditableTable";

const Home: React.FC = () => {
    const [tableData, setTableData] = useState<any[]>([]);

    const handleFileUpload = async (file: File) => {
        // const data = await uploadFile(file);
        const data = [
            {
                "Coluna 1": "Linha 1",
                "Coluna 2": "Linha 1",
                "Coluna 3": "Linha 1",
                "Coluna 4": "Linha 1",
                "Coluna 5": "Linha 1"
            },
            {
                
                "Coluna 1": "Linha 2",
                "Coluna 2": "Linha 2",
                "Coluna 3": "Linha 2",
                "Coluna 4": "Linha 2",
                "Coluna 5": "Linha 2"
            },
            {
                "Coluna 1": "Linha 3",
                "Coluna 2": "Linha 3",
                "Coluna 3": "Linha 3",
                "Coluna 4": "Linha 3",
                "Coluna 5": "Linha 3"
            },
            {
                "Coluna 1": "Linha 4",
                "Coluna 2": "Linha 4",
                "Coluna 3": "Linha 4",
                "Coluna 4": "Linha 4",
                "Coluna 5": "Linha 4"
            }
        ]
        setTableData(data as any[]);
    };

    return (
        <div>
            <FileUploader onFileUpload={handleFileUpload} />
            {tableData.length > 0 && <EditableTable data={tableData} />}
        </div>
    );
};

export default Home;
