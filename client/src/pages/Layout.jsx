import { Outlet } from "react-router-dom";

import { Box, useMediaQuery } from "@mui/material";

import NavBar from "../components/NavBar";

export default function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Box flexGrow={1}>
        <NavBar />
        <Outlet />
      </Box>
    </Box>
  );
}
