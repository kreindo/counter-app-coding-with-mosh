import React from "react";
import Counter from "./Counter";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Counters() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={2}>1</Grid>
        <Grid item xs={8}>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </Grid>
        <Grid item xs={2}>3</Grid>
      </Grid>
    </Container>
  );
}

export default Counters;
