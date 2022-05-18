import { styled, Button } from "@mui/material";
import { Field, Form, ErrorMessage } from "formik";

export const StyledForm = styled(Form)(() => ({
  backgroundColor: "#fff",
  color: "#8d8d8d",
  margin: "auto",
  paddingTop: "80px",
  maxWidth: "400px",
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: "#000",
  border: "1px solid #fff",
  borderRadius: "3px",
  color: "#fff",
  cursor: "pointer",
  display: "block",
  fontSize: "12px",
  margin: "auto",
  marginTop: "20px",
  height: "40px",
  width: "100%",
  textTransform: "uppercase",
  "&:hover": {
    background: "#9b9b9b",
  },
}));

export const StyledField = styled(Field)(() => ({
  border: "1px solid #e5e5e5",
  borderRadius: "5px",
  color: "#8d8d8d",
  fontSize: "14px",
  height: "40px",
  lineHeight: "17px",
  padding: "0 16px",
  width: "100%",
  marginBottom: "10px",
  outlineColor: "#8d8d8d",
}));

export const StyledErrorMessage = styled(ErrorMessage)(() => ({
  color: "#8d8d8d",
}));
