import { Box, styled } from "@mui/system";
import { Link } from "react-router-dom";

export const StyledNavBar = styled("nav")(() => ({
  margin: "0",
  padding: "0",
  backgroundColor: "#3c424a",
}));

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledLink = styled(Link)(() => ({
  display: "block",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#fff",
  cursor: "pointer",
  textDecoration: "none",
  padding: "20px 0",
  "&:hover": {
    color: "#9b9b9b",
  },
}));
