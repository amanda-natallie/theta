import React from "react";
import { Box } from "../../../styles/components/Box";
import { Subtitle } from "../../../styles/components/Typography";
import theme from "../../../styles/theme";

const ClientFavorites = () => {
  return (
    <Box align="flex-start">
      <Subtitle color={theme.palette.primary.main}>Favoritos</Subtitle>
      <p>em breve...</p>
    </Box>
  );
};

export default ClientFavorites;
