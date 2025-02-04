import axios from "axios";

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
