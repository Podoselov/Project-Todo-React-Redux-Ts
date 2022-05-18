import React, { FC } from "react";
import { Container } from "@mui/material";
import { StyledNavBar, StyledLink, StyledBox } from "./stylesNavigation";
import {
  HOME_ROUTE,
  TODOS_ROUTE,
  COMPLETED_TODOS_ROUTE,
} from "../../pages/utils/consts";

const NavigationComponent: FC = () => {
  return (
    <StyledNavBar>
      <Container>
        <StyledBox>
          <StyledLink to={HOME_ROUTE}>Home</StyledLink>
          <StyledLink to={TODOS_ROUTE}>Todos</StyledLink>
          <StyledLink to={COMPLETED_TODOS_ROUTE}>Completed Todo</StyledLink>
        </StyledBox>
      </Container>
    </StyledNavBar>
  );
};

export default NavigationComponent;
