import React from "react";
import Box from "@material-ui/core/Box";

function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      m={8}
      p={1}
      bgcolor="background.paper"
    >
      <div className="app">
        <h2>WELCOME TO NUTRITIONIST APP</h2>
      </div>
    </Box>
  );
}

export default Home;
