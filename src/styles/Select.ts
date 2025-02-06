import { styled } from "@mui/material/styles";

export const Select = styled("select")({
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
    textAlign: "center",

    "&:hover": {
        borderColor: "#888",
    },
    "&:focus": {
        borderColor: "#1976d2",
        boxShadow: "0 0 5px rgba(25, 118, 210, 0.5)",
    },
});
