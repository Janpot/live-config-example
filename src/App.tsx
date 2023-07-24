import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyGrid from "../toolpad/.generated/MyGrid";
import MyGrid2 from "../toolpad/.generated/MyGrid2";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MUI Live configurator example
        </Typography>
        <MyGrid />
        <MyGrid2 />
      </Box>
    </Container>
  );
}
