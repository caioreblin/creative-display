import axios from "axios";

export const uploadFile = async (file: any) => {
    try {
        const response = await axios.post("", file);
        return response.data;
    } catch (error) {
        console.error("Erro ao subir arquivo:", error);
        throw error;
    }
};

export const updateRow = async (updatedRow: any) => {
  try {
    const response = await axios.post(
      "",
      updatedRow
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar a linha:", error);
    throw error;
  }
};
