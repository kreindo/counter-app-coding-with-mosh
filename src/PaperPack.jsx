import React, { Component } from "react";
import { Box, Paper } from "@mui/material";

export default class PaperPack extends Component {
  render() {
    // const setPaper = () => {
    //   const papers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    //   papers.map((paper) => <Paper elevation={5} />);
    // };
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        {/* {setPaper()} */}
        <Paper elevation={5} />
        <Paper elevation={5} />
        <Paper elevation={5} />
      </Box>
    );
  }
}
